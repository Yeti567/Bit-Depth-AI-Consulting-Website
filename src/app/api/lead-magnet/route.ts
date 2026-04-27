import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function sendConfirmationEmail(firstName: string, email: string, source: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured.');
  }

  const resend = new Resend(apiKey);
  const safeFirstName = escapeHtml(firstName);
  const safeEmail = escapeHtml(email);
  const safeSource = escapeHtml(source);

  await resend.emails.send({
    from: 'Bit Depth AI <noreply@bitdepthaiconsulting.com>',
    to: email,
    bcc: ['blake@bitdepthaiconsulting.com'],
    subject: 'Your AI Readiness Checklist',
    html: `
      <h2>Your AI Readiness Checklist</h2>
      <p>Hi ${safeFirstName},</p>
      <p>Thanks for requesting the Bit Depth AI Readiness Checklist.</p>
      <p>
        You can download it here:
        <a href="https://bitdepthaiconsulting.com/downloads/ai-readiness-checklist.pdf">
          Download the checklist
        </a>
      </p>
      <p>If you have questions about where your business stands with AI, reply to this email and Blake will be happy to help.</p>
      <p>Bit Depth AI Consulting</p>
      <hr />
      <p style="color:#888;font-size:12px;">Lead source: ${safeSource} &middot; Email: ${safeEmail}</p>
    `,
  });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { firstName, email, source } = body;

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const trimmedFirstName = firstName.trim();
    const normalizedSource = typeof source === 'string' && source.trim().length > 0 ? source.trim() : 'unknown';

    await sendConfirmationEmail(trimmedFirstName, normalizedEmail, normalizedSource);

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
