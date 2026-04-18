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

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email delivery is not configured.' },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const formattedScores = {
      dataQuality: pillar_scores?.['data-quality'] ?? 0,
      processClarity: pillar_scores?.['process-clarity'] ?? 0,
      technologyStack: pillar_scores?.['technology-stack'] ?? 0,
      teamReadiness: pillar_scores?.['team-readiness'] ?? 0,
      strategicAlignment: pillar_scores?.['strategic-alignment'] ?? 0,
    };

    await Promise.all([
      resend.emails.send({
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
            <li>Data Quality: ${formattedScores.dataQuality}/20</li>
            <li>Process Clarity: ${formattedScores.processClarity}/20</li>
            <li>Technology Stack: ${formattedScores.technologyStack}/20</li>
            <li>Team Readiness: ${formattedScores.teamReadiness}/20</li>
            <li>Strategic Alignment: ${formattedScores.strategicAlignment}/20</li>
          </ul>
          <p><strong>Submitted:</strong> ${submitted_at}</p>
        `,
      }),
      resend.emails.send({
        from: 'BitDepth AI <noreply@bitdepthaiconsulting.com>',
        to: email,
        subject: 'Your AI Readiness Assessment Results',
        html: `
          <h2>Your AI Readiness Assessment Results</h2>
          <p>Hi ${name},</p>
          <p>Thanks for completing the BitDepth AI Readiness Assessment.</p>
          <p><strong>Total score:</strong> ${total_score}/100</p>
          <p><strong>Grade:</strong> ${grade}</p>
          <p><strong>Tier:</strong> ${tier}</p>
          <p><strong>Pillar scores:</strong></p>
          <ul>
            <li>Data Quality: ${formattedScores.dataQuality}/20</li>
            <li>Process Clarity: ${formattedScores.processClarity}/20</li>
            <li>Technology Stack: ${formattedScores.technologyStack}/20</li>
            <li>Team Readiness: ${formattedScores.teamReadiness}/20</li>
            <li>Strategic Alignment: ${formattedScores.strategicAlignment}/20</li>
          </ul>
          <p>If you want help turning these results into a practical roadmap, just reply to this email and we can set up a discovery call.</p>
          <p>BitDepth AI Consulting</p>
        `,
      }),
    ]);

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
