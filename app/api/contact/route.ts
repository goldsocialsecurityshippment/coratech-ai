import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, role, type, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Coratech AI <hello@coratechai.com>",
      to: ["hello@coratechai.com"],
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName} — ${company || "Unknown Company"}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 24px; background: #f8fafc;">
          
          <div style="background: #0A0F1E; padding: 28px 32px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; font-size: 20px; margin: 0; font-weight: 400; letter-spacing: -0.01em;">
              New Website Enquiry
            </h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 6px 0 0; font-family: sans-serif;">
              Submitted via coratech.com
            </p>
          </div>

          <div style="background: white; padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
            
            <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 15px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #718096; width: 140px; vertical-align: top;">Full Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0A0F1E; font-weight: 500;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #718096; vertical-align: top;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                  <a href="mailto:${email}" style="color: #4A6FA5; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #718096; vertical-align: top;">Organisation</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0A0F1E;">${company}</td>
              </tr>` : ""}
              ${role ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #718096; vertical-align: top;">Role</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0A0F1E;">${role}</td>
              </tr>` : ""}
              ${type ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #718096; vertical-align: top;">Enquiry Type</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0A0F1E;">${type}</td>
              </tr>` : ""}
            </table>

            <div style="margin-top: 28px;">
              <p style="font-family: sans-serif; font-size: 13px; color: #718096; margin: 0 0 10px; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
              <div style="background: #f8fafc; border-left: 3px solid #4A6FA5; padding: 18px 20px; border-radius: 0 8px 8px 0;">
                <p style="font-family: sans-serif; font-size: 15px; color: #2D3748; line-height: 1.75; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #f1f5f9;">
              <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; background: #0A0F1E; color: white; border-radius: 8px; font-family: sans-serif; font-size: 14px; font-weight: 500; text-decoration: none;">
                Reply to ${firstName}
              </a>
            </div>

          </div>

          <div style="padding: 20px 24px; text-align: center;">
            <p style="font-family: sans-serif; font-size: 12px; color: #94a3b8; margin: 0;">
              Coratech AI · Part of Canmore Digital · Accra, Ghana
            </p>
          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
