import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      company, 
      phone, 
      industry,
      total_score, 
      grade, 
      tier,
      pillar_scores,
      submitted_at 
    } = body;

    // Validate required fields
    if (!name || !email || !company || !industry) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email notification using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'BitDepth AI <noreply@bitdepthaiconsulting.com>',
          to: 'blake@bitdepthaiconsulting.com',
          subject: `New AI Readiness Assessment Lead - ${company}`,
          html: `
            <h2>New AI Readiness Assessment Lead</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Industry:</strong> ${industry}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>AI Readiness Score:</strong> ${total_score}/100</p>
            <p><strong>Grade:</strong> ${grade} - ${tier}</p>
            <p><strong>Pillar Scores:</strong></p>
            <ul>
              <li>Data Quality: ${pillar_scores.data_quality}/20</li>
              <li>Process Clarity: ${pillar_scores.process_clarity}/20</li>
              <li>Technology Stack: ${pillar_scores.technology_stack}/20</li>
              <li>Team Readiness: ${pillar_scores.team_readiness}/20</li>
              <li>Strategic Alignment: ${pillar_scores.strategic_alignment}/20</li>
            </ul>
            <p><strong>Submitted:</strong> ${submitted_at}</p>
          `,
        });
      } catch (emailError) {
        console.error('Failed to send email via Resend:', emailError);
        // Continue anyway - don't block the submission
      }
    }

    // Log the data as backup
    console.log('AI Readiness Assessment Lead:', {
      name,
      email,
      company,
      phone,
      industry,
      total_score,
      grade,
      tier,
      pillar_scores,
      submitted_at,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing lead submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
