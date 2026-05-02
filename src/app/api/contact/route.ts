import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const TO_EMAIL = 'blake@bitdepthaiconsulting.com';
// Default From address. Override with the RESEND_FROM_EMAIL env var if you
// want to send from a different verified address (e.g. while a new domain
// is mid-verification, set it to "BitDepth AI <onboarding@resend.dev>").
const DEFAULT_FROM_EMAIL = 'BitDepth AI <blake@bitdepthaiconsulting.com>';
const BASE_SUBJECT = 'New Website Contact Form Submission';

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function topicLabel(topic: unknown): string | null {
  if (typeof topic !== 'string') return null;
  const map: Record<string, string> = {
    audit: 'AI Opportunity Audit booking'
  };
  return map[topic] ?? null;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { name, company, email, phone, message, topic, website } = body ?? {};

    // Honeypot. Real users never see or fill the "website" field.
    // If it has a value, silently accept and drop the submission.
    if (typeof website === 'string' && website.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please complete all required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = String(email).trim();
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('Contact form: RESEND_API_KEY is not set in this environment.');
      return NextResponse.json(
        {
          success: false,
          error:
            'Email delivery is not configured on the server. Please contact us directly at ' +
            TO_EMAIL +
            '.'
        },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const safe = {
      name: escapeHtml(name),
      company: escapeHtml(company),
      email: escapeHtml(trimmedEmail),
      phone: escapeHtml(phone),
      message: escapeHtml(message).replace(/\n/g, '<br />')
    };

    const label = topicLabel(topic);
    const subject = label ? `${BASE_SUBJECT} - ${label}` : BASE_SUBJECT;

    const fromAddress = process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL;

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: TO_EMAIL,
      replyTo: trimmedEmail.toLowerCase(),
      subject,
      html: `
        <h2>${escapeHtml(BASE_SUBJECT)}</h2>
        ${label ? `<p><strong>Topic:</strong> ${escapeHtml(label)}</p>` : ''}
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Company:</strong> ${safe.company}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${safe.phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${safe.message}</p>
      `
    });

    if (error) {
      console.error('Contact form: Resend send failed', error);
      // TEMPORARY: surface the real Resend error to the user so we can debug.
      // Revert this branch to the friendly message once delivery is working.
      const detail =
        (error as { message?: string; name?: string })?.message ??
        (error as { name?: string })?.name ??
        JSON.stringify(error);
      return NextResponse.json(
        {
          success: false,
          error: 'Resend error: ' + detail
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form: unexpected error', err);
    return NextResponse.json(
      {
        success: false,
        error:
          'Something went wrong on our end. Please try again, or email ' +
          TO_EMAIL +
          ' directly.'
      },
      { status: 500 }
    );
  }
}
