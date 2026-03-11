import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

function getSupabase() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );
}

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

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

function scheduleDate(daysFromNow: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  d.setHours(9, 0, 0, 0); // 9am
  return d.toISOString();
}

const BACKGROUND_LABELS: Record<string, string> = {
  "career-switcher": "Career switcher",
  "junior-developer": "Junior developer",
  "it-professional": "IT professional",
  "corporate": "Corporate / team training",
};

const EXPERIENCE_LABELS: Record<string, string> = {
  "none": "None — not used it yet",
  "basic": "Basic — tutorials only",
  "hands-on": "Some hands-on — informal builds",
  "intermediate": "Intermediate — professional use",
};

const DEVOPS_LABELS: Record<string, string> = {
  "yes": "Yes — I have used it",
  "heard-of-it": "Aware but not used",
  "no": "No — new to me",
};

const COHORT_LABELS: Record<string, string> = {
  "yes": "Available for next cohort",
  "future": "Interested in a future cohort",
  "unsure": "Not yet sure",
};

// ── Shared email wrapper ───────────────────────────────────────────────────────

function emailWrapper(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f0eb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:600px;margin:0 auto;padding:32px 16px">
    <div style="margin-bottom:24px">
      <span style="font-size:13px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#78716c">Cyber Ninjas Dojo</span>
    </div>
    <div style="background:#fff;border:1px solid #e2d2c5;border-radius:10px;overflow:hidden">
      ${content}
    </div>
    <p style="margin-top:24px;font-size:11px;color:#a8a29e;text-align:center">
      Cyber Ninjas Corp Ltd · Company No. 15889960 · <a href="${SITE_URL}" style="color:#a8a29e">cyberninjascorp.com</a>
    </p>
  </div>
</body>
</html>`;
}

// ── Email templates ────────────────────────────────────────────────────────────

function confirmationEmail(firstName: string): string {
  return emailWrapper(`
    <div style="padding:32px">
      <h1 style="margin:0 0 8px;font-size:24px;font-weight:300;color:#1c1917">Application received</h1>
      <div style="width:40px;height:2px;background:#1c1917;margin-bottom:24px"></div>
      <p style="margin:0 0 16px;color:#57534e;line-height:1.6">Hi ${escapeHtml(firstName)},</p>
      <p style="margin:0 0 16px;color:#57534e;line-height:1.6">
        Thank you for applying to the Cyber Ninjas Dojo. Your application has been received and is in the review queue.
      </p>
      <p style="margin:0 0 24px;color:#57534e;line-height:1.6">
        A member of the team will be in touch within <strong>two working days</strong> to let you know the outcome or to ask any follow-up questions.
      </p>
      <div style="border-top:1px solid #e2d2c5;padding-top:24px;margin-top:8px">
        <p style="margin:0 0 8px;font-size:13px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#78716c">What happens next</p>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #f5f0eb;vertical-align:top;width:24px">
              <span style="display:inline-block;width:20px;height:20px;border-radius:50%;background:#1c1917;color:#fff;font-size:11px;font-weight:600;text-align:center;line-height:20px">1</span>
            </td>
            <td style="padding:10px 12px;border-bottom:1px solid #f5f0eb;color:#57534e;font-size:14px;line-height:1.5">We review your application — typically within two working days.</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #f5f0eb;vertical-align:top">
              <span style="display:inline-block;width:20px;height:20px;border-radius:50%;background:#1c1917;color:#fff;font-size:11px;font-weight:600;text-align:center;line-height:20px">2</span>
            </td>
            <td style="padding:10px 12px;border-bottom:1px solid #f5f0eb;color:#57534e;font-size:14px;line-height:1.5">If accepted, we send a place confirmation and payment details.</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;vertical-align:top">
              <span style="display:inline-block;width:20px;height:20px;border-radius:50%;background:#1c1917;color:#fff;font-size:11px;font-weight:600;text-align:center;line-height:20px">3</span>
            </td>
            <td style="padding:10px 12px;color:#57534e;font-size:14px;line-height:1.5">Payment is due on acceptance — not at the point of applying.</td>
          </tr>
        </table>
      </div>
      <div style="margin-top:24px;background:#f5f0eb;border-radius:8px;padding:16px">
        <p style="margin:0;font-size:13px;color:#78716c;line-height:1.5">
          Questions? Reply to this email or chat with us at <a href="${SITE_URL}/dojo" style="color:#1c1917;font-weight:500">cyberninjascorp.com/dojo</a>
        </p>
      </div>
    </div>
  `);
}

function day2Email(firstName: string, cohortAvailability: string): string {
  const isNextCohort = cohortAvailability === "yes";
  const intro = isNextCohort
    ? `We are currently reviewing your application for the <strong>April 2026 cohort</strong>. While you wait, here is a closer look at what the programme actually involves.`
    : `We are reviewing your application and will be in touch shortly. In the meantime, here is a detailed look at what the Dojo involves — so you can be confident it is the right fit.`;

  return emailWrapper(`
    <div style="padding:32px">
      <h1 style="margin:0 0 8px;font-size:24px;font-weight:300;color:#1c1917">What the Dojo actually involves</h1>
      <div style="width:40px;height:2px;background:#1c1917;margin-bottom:24px"></div>
      <p style="margin:0 0 16px;color:#57534e;line-height:1.6">Hi ${escapeHtml(firstName)},</p>
      <p style="margin:0 0 24px;color:#57534e;line-height:1.6">${intro}</p>

      <p style="margin:0 0 8px;font-size:13px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#78716c">The core of the programme</p>
      <div style="border-left:3px solid #1c1917;padding-left:16px;margin-bottom:24px">
        <p style="margin:0 0 12px;color:#57534e;font-size:14px;line-height:1.6">
          <strong>Consultancy simulation</strong> — From day one, you operate inside a structured project environment modelled on real engagements. Timelines, deliverables, and dependencies mirror live project conditions.
        </p>
        <p style="margin:0 0 12px;color:#57534e;font-size:14px;line-height:1.6">
          <strong>Agile delivery</strong> — Every sprint begins with planning and ends with a review. You will run standups, manage a backlog, raise blockers, and participate in retrospectives.
        </p>
        <p style="margin:0 0 12px;color:#57534e;font-size:14px;line-height:1.6">
          <strong>Azure DevOps</strong> — Work items, user stories, epics, and sprint boards are managed in ADO throughout. You will leave knowing how consultancies actually track delivery.
        </p>
        <p style="margin:0;color:#57534e;font-size:14px;line-height:1.6">
          <strong>PL-200 preparation</strong> — Structured exam preparation is woven into the programme alongside the practical work, not bolted on at the end.
        </p>
      </div>

      <div style="background:#f5f0eb;border-radius:8px;padding:20px;margin-bottom:24px">
        <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#1c1917">Programme at a glance</p>
        <p style="margin:0 0 6px;font-size:13px;color:#78716c">Duration: <span style="color:#1c1917;font-weight:500">8–12 weeks</span></p>
        <p style="margin:0 0 6px;font-size:13px;color:#78716c">Format: <span style="color:#1c1917;font-weight:500">Cohort-based, live delivery</span></p>
        <p style="margin:0 0 6px;font-size:13px;color:#78716c">Cohort size: <span style="color:#1c1917;font-weight:500">Maximum 12 participants</span></p>
        <p style="margin:0;font-size:13px;color:#78716c">Fee: <span style="color:#1c1917;font-weight:500">£2,500 + VAT (individual)</span></p>
      </div>

      <a href="${SITE_URL}/dojo/programme" style="display:inline-block;background:#1c1917;color:#fff;text-decoration:none;padding:12px 24px;border-radius:6px;font-size:13px;font-weight:500;letter-spacing:0.05em">
        View Full Programme Overview →
      </a>

      <p style="margin-top:24px;font-size:13px;color:#a8a29e">
        Reply to this email if you have any questions — we are happy to talk through the details before we come back to you on your application.
      </p>
    </div>
  `);
}

function day5Email(firstName: string): string {
  return emailWrapper(`
    <div style="padding:32px">
      <h1 style="margin:0 0 8px;font-size:24px;font-weight:300;color:#1c1917">Any questions before we get back to you?</h1>
      <div style="width:40px;height:2px;background:#1c1917;margin-bottom:24px"></div>
      <p style="margin:0 0 16px;color:#57534e;line-height:1.6">Hi ${escapeHtml(firstName)},</p>
      <p style="margin:0 0 16px;color:#57534e;line-height:1.6">
        Your application is still with the team. We wanted to check in — if you have any questions about the Dojo, the programme structure, or what to expect, we are happy to answer them now.
      </p>
      <p style="margin:0 0 24px;color:#57534e;line-height:1.6">
        Common questions we get:
      </p>
      <ul style="margin:0 0 24px;padding-left:0;list-style:none">
        <li style="padding:10px 0;border-bottom:1px solid #f5f0eb;color:#57534e;font-size:14px;padding-left:16px;position:relative">
          <span style="position:absolute;left:0;color:#78716c">·</span>
          How much time do I need to commit each week?
        </li>
        <li style="padding:10px 0;border-bottom:1px solid #f5f0eb;color:#57534e;font-size:14px;padding-left:16px;position:relative">
          <span style="position:absolute;left:0;color:#78716c">·</span>
          Is the programme fully remote?
        </li>
        <li style="padding:10px 0;border-bottom:1px solid #f5f0eb;color:#57534e;font-size:14px;padding-left:16px;position:relative">
          <span style="position:absolute;left:0;color:#78716c">·</span>
          What level of Power Platform experience do I need before starting?
        </li>
        <li style="padding:10px 0;color:#57534e;font-size:14px;padding-left:16px;position:relative">
          <span style="position:absolute;left:0;color:#78716c">·</span>
          What support is available after the programme ends?
        </li>
      </ul>
      <a href="${SITE_URL}/dojo" style="display:inline-block;background:#1c1917;color:#fff;text-decoration:none;padding:12px 24px;border-radius:6px;font-size:13px;font-weight:500;letter-spacing:0.05em">
        Chat With Us →
      </a>
      <p style="margin-top:24px;font-size:13px;color:#a8a29e">
        Or simply reply to this email — it goes directly to the team.
      </p>
    </div>
  `);
}

function adminEmail(data: Record<string, string>): string {
  const { firstName, lastName, email, linkedin, jobTitle, location,
    backgroundType, companyName, teamSize, corporateObjectives,
    experienceLevel, devOpsExperience, certifications,
    whyDojo, successDefinition, cohortAvailability, howHeard,
    scholarshipConsideration, scholarshipContext } = data;

  const name = escapeHtml(`${firstName} ${lastName}`);
  const safeEmail = escapeHtml(email);

  return emailWrapper(`
    <div style="padding:24px 32px;background:#1c1917;border-radius:10px 10px 0 0">
      <p style="margin:0;font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#78716c">New Application</p>
      <h1 style="margin:4px 0 0;font-size:22px;font-weight:400;color:#fff">${name}</h1>
    </div>
    <div style="padding:24px 32px">
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <tr><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#78716c;width:140px">Email</td><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#1c1917"><a href="mailto:${safeEmail}" style="color:#1c1917">${safeEmail}</a></td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#78716c">Job title</td><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#1c1917">${escapeHtml(jobTitle)}</td></tr>
        ${location ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#78716c">Location</td><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#1c1917">${escapeHtml(location)}</td></tr>` : ""}
        ${linkedin ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#78716c">LinkedIn</td><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#1c1917"><a href="${escapeHtml(linkedin)}" style="color:#1c1917">${escapeHtml(linkedin)}</a></td></tr>` : ""}
        <tr><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#78716c">Background</td><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#1c1917">${escapeHtml(BACKGROUND_LABELS[backgroundType] ?? backgroundType)}</td></tr>
        ${companyName ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#78716c">Company</td><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#1c1917">${escapeHtml(companyName)}${teamSize ? ` (${escapeHtml(teamSize)})` : ""}</td></tr>` : ""}
        <tr><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#78716c">PP level</td><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#1c1917">${escapeHtml(EXPERIENCE_LABELS[experienceLevel] ?? experienceLevel)}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#78716c">Azure DevOps</td><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#1c1917">${escapeHtml(DEVOPS_LABELS[devOpsExperience] ?? devOpsExperience)}</td></tr>
        ${certifications ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#78716c">Certs</td><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#1c1917">${escapeHtml(certifications)}</td></tr>` : ""}
        <tr><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#78716c">Availability</td><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#1c1917">${escapeHtml(COHORT_LABELS[cohortAvailability] ?? cohortAvailability)}</td></tr>
        ${howHeard ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#78716c">How heard</td><td style="padding:8px 0;border-bottom:1px solid #f5f0eb;color:#1c1917">${escapeHtml(howHeard)}</td></tr>` : ""}
      </table>

      <div style="margin-top:20px">
        <p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#78716c">Why the Dojo</p>
        <p style="margin:0 0 16px;color:#1c1917;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(whyDojo)}</p>
        <p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#78716c">Success definition</p>
        <p style="margin:0;color:#1c1917;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(successDefinition)}</p>
        ${corporateObjectives ? `<p style="margin:16px 0 6px;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#78716c">Corporate objectives</p><p style="margin:0;color:#1c1917;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(corporateObjectives)}</p>` : ""}
        ${scholarshipConsideration === "true" ? `<div style="margin-top:16px;padding:12px 16px;background:#fef2f2;border-left:3px solid #ef4444;border-radius:4px"><p style="margin:0 0 4px;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#dc2626">Scholarship requested</p>${scholarshipContext ? `<p style="margin:0;color:#1c1917;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(scholarshipContext)}</p>` : ""}</div>` : ""}
      </div>
    </div>
  `);
}

// ── Route handler ──────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName, lastName, email, linkedin, jobTitle, location,
      backgroundType, companyName, teamSize, corporateObjectives,
      experienceLevel, certifications, devOpsExperience,
      whyDojo, successDefinition, howHeard, cohortAvailability,
      scholarshipConsideration, scholarshipContext,
    } = body;

    if (!firstName || !lastName || !email || !jobTitle || !backgroundType ||
        !experienceLevel || !devOpsExperience || !whyDojo || !successDefinition || !cohortAvailability) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save to Supabase
    const { error: dbError } = await getSupabase().from("dojo_applications").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      linkedin: linkedin || null,
      job_title: jobTitle,
      location: location || null,
      background_type: backgroundType,
      company_name: companyName || null,
      team_size: teamSize || null,
      corporate_objectives: corporateObjectives || null,
      experience_level: experienceLevel,
      certifications: certifications || null,
      dev_ops_experience: devOpsExperience,
      why_dojo: whyDojo,
      success_definition: successDefinition,
      how_heard: howHeard || null,
      cohort_availability: cohortAvailability,
      scholarship_consideration: scholarshipConsideration ?? false,
      scholarship_context: scholarshipContext || null,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return Response.json({ error: "Failed to save application" }, { status: 500 });
    }

    const data = {
      firstName, lastName, email, linkedin, jobTitle, location,
      backgroundType, companyName, teamSize, corporateObjectives,
      experienceLevel, certifications, devOpsExperience,
      whyDojo, successDefinition, howHeard, cohortAvailability,
      scholarshipConsideration, scholarshipContext,
    };

    // Fire all emails — immediate + scheduled sequence
    const resend = getResend();
    await Promise.all([
      // 1. Admin notification (immediate)
      resend.emails.send({
        from: FROM,
        to: ADMIN_EMAIL,
        subject: `New Dojo Application — ${firstName} ${lastName}`,
        replyTo: email,
        html: adminEmail(data),
      }),

      // 2. Applicant confirmation (immediate)
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "Your Dojo application has been received",
        html: confirmationEmail(firstName),
      }),

      // 3. Day 2: what to expect (scheduled)
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "What the Cyber Ninjas Dojo actually involves",
        html: day2Email(firstName, cohortAvailability),
        scheduledAt: scheduleDate(2),
      }),

      // 4. Day 5: follow-up / any questions (scheduled)
      resend.emails.send({
        from: FROM,
        to: email,
        subject: `${firstName}, any questions about your Dojo application?`,
        html: day5Email(firstName),
        scheduledAt: scheduleDate(5),
      }),
    ]);

    return Response.json({ success: true });
  } catch (err) {
    console.error("Dojo apply error:", err);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
