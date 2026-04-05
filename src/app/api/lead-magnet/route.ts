import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface LeadSubmission {
  firstName: string;
  email: string;
  source: string;
  timestamp: string;
}

// TODO: Replace with actual email provider integration
// This stub uses console.log for development. Replace with Resend, Nodemailer, or SendGrid.
async function sendConfirmationEmail(firstName: string, email: string): Promise<void> {
  // TODO: Integrate with your email provider here
  // eslint-disable-next-line no-console
  console.log(`[EMAIL STUB] Sending AI Readiness Checklist to ${firstName} at ${email}`);
  // Example with Resend (once configured):
  // await resend.emails.send({
  //   from: 'BitDepth AI Consulting <blake@bitdepthaiconsulting.com>',
  //   to: email,
  //   subject: 'Your AI Readiness Checklist is here',
  //   html: `<p>Hi ${firstName},</p><p>Thanks for requesting the AI Readiness Checklist. Download it here: <a href="https://bitdepthaiconsulting.com/downloads/ai-readiness-checklist.pdf">AI Readiness Checklist PDF</a></p>`,
  // });
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
    // eslint-disable-next-line no-console
    console.error('Lead magnet submission error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
