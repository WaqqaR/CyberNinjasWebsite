import { Resend } from "resend";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
      dateStyle: "full",
      timeStyle: "short",
    });

    const messagesHtml = messages
      .map((msg: Message) => {
        const label = msg.role === "user" ? "Visitor" : "Bot";
        const color = msg.role === "user" ? "#1c1917" : "#6b7280";
        return `<p style="margin:0 0 8px"><strong style="color:${color}">${label}:</strong> ${escapeHtml(msg.content)}</p>`;
      })
      .join("");

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#1c1917;border-bottom:1px solid #e5e7eb;padding-bottom:8px">Chat Transcript</h2>
        <p style="color:#6b7280;font-size:14px;margin-bottom:16px">${timestamp}</p>
        <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px">
          ${messagesHtml}
        </div>
        <p style="color:#9ca3af;font-size:12px;margin-top:16px">Sent automatically from the Cyber Ninjas website chat widget.</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "Cyber Ninjas Chat <onboarding@resend.dev>",
      to: "waqqarahmed4@gmail.com",
      subject: `Chat Transcript — ${timestamp}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Send transcript error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
