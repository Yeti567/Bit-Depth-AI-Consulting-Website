import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { name, company, email, phone, message, topic } = body;

    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please complete all required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email).trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Email delivery is not configured.' },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const safe = {
      name: escapeHtml(name),
      company: escapeHtml(company),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      message: escapeHtml(message).replace(/\n/g, '<br />'),
    };

    const isAuditBooking = topic === 'audit';
    const subjectPrefix = isAuditBooking ? 'AI AUDIT BOOKING' : 'New Contact Inquiry';
    const headingLabel = isAuditBooking ? 'AI Audit Booking Request' : 'New Contact Inquiry';

    await resend.emails.send({
      from: 'BitDepth AI <noreply@bitdepthaiconsulting.com>',
      to: 'blake@bitdepthaiconsulting.com',
      replyTo: String(email).trim().toLowerCase(),
      subject: `${subjectPrefix} - ${String(company).trim()}`,
      html: `
        <h2>${headingLabel}</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Company:</strong> ${safe.company}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${safe.phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${safe.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'We could not send your message right now. Please try again shortly.' },
      { status: 500 }
    );
  }
}
