import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';

interface LeadSubmission {
  firstName: string;
  email: string;
  source: string;
  timestamp: string;
}

async function sendConfirmationEmail(firstName: string, email: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured.');
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: 'BitDepth AI <noreply@bitdepthaiconsulting.com>',
    to: email,
    bcc: ['blake@bitdepthaiconsulting.com'],
    subject: 'Your AI Readiness Checklist',
    html: `
      <h2>Your AI Readiness Checklist</h2>
      <p>Hi ${firstName},</p>
      <p>Thanks for requesting the BitDepth AI Readiness Checklist.</p>
      <p>
        You can download it here:
        <a href="https://bitdepthaiconsulting.com/downloads/ai-readiness-checklist.pdf">
          Download the checklist
        </a>
      </p>
      <p>If you have questions about where your business stands with AI, reply to this email and Blake will be happy to help.</p>
      <p>BitDepth AI Consulting</p>
    `,
  });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { firstName, email, source } = body;

    // Validation
    if (!firstName || typeof firstName !== 'string' || firstName.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'First name is required.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email is required.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const trimmedFirstName = firstName.trim();

    // Prepare data directory and file path
    const dataDir = path.join(process.cwd(), 'data');
    const leadsFile = path.join(dataDir, 'leads.json');

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing leads
    let leads: LeadSubmission[] = [];
    if (fs.existsSync(leadsFile)) {
      try {
        const fileContent = fs.readFileSync(leadsFile, 'utf-8');
        leads = JSON.parse(fileContent);
        if (!Array.isArray(leads)) {
          leads = [];
        }
      } catch {
        leads = [];
      }
    }

    // Check for duplicate email (rate limiting)
    const existingLead = leads.find((lead) => lead.email === normalizedEmail);
    if (existingLead) {
      return NextResponse.json(
        { success: false, error: 'This email has already been submitted.' },
        { status: 429 }
      );
    }

    // Add new lead
    const newLead: LeadSubmission = {
      firstName: trimmedFirstName,
      email: normalizedEmail,
      source: source || 'unknown',
      timestamp: new Date().toISOString(),
    };

    leads.push(newLead);

    // Write to file
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));

    // Send confirmation email
    await sendConfirmationEmail(trimmedFirstName, normalizedEmail);

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead magnet submission error:', error);
    return NextResponse.json(
      { success: false, error: 'We could not send your checklist right now. Please try again in a few minutes.' },
      { status: 500 }
    );
  }
}
