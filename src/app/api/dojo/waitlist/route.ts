import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "Cyber Ninjas <dojo@cyberninjascorp.com>";
const ADMIN_EMAIL = "waqqarahmed4@gmail.com";
const SITE_URL = "https://cyberninjascorp.com";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const { firstName, email } = await request.json();

    if (!firstName?.trim() || !email?.trim() || !email.includes("@")) {
      return Response.json({ error: "Name and valid email are required" }, { status: 400 });
    }

    // Check for duplicate
    const { data: existing } = await supabase
      .from("dojo_waitlist")
      .select("id")
      .eq("email", email.toLowerCase().trim())
      .maybeSingle();

    if (existing) {
      // Already on list — return success silently (don't reveal to end user)
      return Response.json({ success: true });
    }

    const { error: dbError } = await supabase.from("dojo_waitlist").insert({
      first_name: firstName.trim(),
      email: email.toLowerCase().trim(),
    });

    if (dbError) {
      console.error("Supabase waitlist insert error:", dbError);
      return Response.json({ error: "Failed to join waitlist" }, { status: 500 });
    }

    const safeName = escapeHtml(firstName.trim());
    const safeEmail = escapeHtml(email.trim());

    await Promise.all([
      // Admin notification
      resend.emails.send({
        from: FROM,
        to: ADMIN_EMAIL,
        subject: `New Dojo Waitlist — ${safeName}`,
        html: `
          <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px">
            <h2 style="color:#1c1917;margin:0 0 16px">New waitlist signup</h2>
            <p style="margin:0 0 8px;color:#57534e"><strong>Name:</strong> ${safeName}</p>
            <p style="margin:0;color:#57534e"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color:#1c1917">${safeEmail}</a></p>
          </div>
        `,
      }),

      // Confirmation to subscriber
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "You are on the Dojo waitlist",
        html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f0eb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:600px;margin:0 auto;padding:32px 16px">
    <div style="margin-bottom:24px">
      <span style="font-size:13px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#78716c">Cyber Ninjas Dojo</span>
    </div>
    <div style="background:#fff;border:1px solid #e2d2c5;border-radius:10px;overflow:hidden">
      <div style="padding:32px">
        <h1 style="margin:0 0 8px;font-size:24px;font-weight:300;color:#1c1917">You are on the waitlist</h1>
        <div style="width:40px;height:2px;background:#1c1917;margin-bottom:24px"></div>
        <p style="margin:0 0 16px;color:#57534e;line-height:1.6">Hi ${safeName},</p>
        <p style="margin:0 0 16px;color:#57534e;line-height:1.6">
          You are now on the waitlist for the next Cyber Ninjas Dojo cohort. We will contact you as soon as applications open — before we announce publicly.
        </p>
        <p style="margin:0 0 24px;color:#57534e;line-height:1.6">
          In the meantime, the programme overview has full details on what to expect, the format, and the investment.
        </p>
        <a href="${SITE_URL}/dojo/programme" style="display:inline-block;background:#1c1917;color:#fff;text-decoration:none;padding:12px 24px;border-radius:6px;font-size:13px;font-weight:500;letter-spacing:0.05em">
          View Programme Overview →
        </a>
        <p style="margin-top:24px;font-size:13px;color:#a8a29e">
          Questions? Reply to this email — it goes straight to the team.
        </p>
      </div>
    </div>
    <p style="margin-top:24px;font-size:11px;color:#a8a29e;text-align:center">
      Cyber Ninjas Corp Ltd · Company No. 15889960 · <a href="${SITE_URL}" style="color:#a8a29e">cyberninjascorp.com</a>
    </p>
  </div>
</body>
</html>`,
      }),
    ]);

    return Response.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
