// Cloudflare Worker: Contact Form Handler
// Deploys to: workers.theibresources.com/contact
// Receives form POST, validates, sends email via SendGrid/Mailgun/Resend API

export interface Env {
  CONTACT_EMAIL: string;       // Your email (secret)
  EMAIL_API_KEY: string;       // SendGrid/Mailgun/Resend API key (secret)
  EMAIL_API_PROVIDER: string;  // "sendgrid" | "mailgun" | "resend"
  ALLOWED_ORIGIN: string;      // "https://theibresources.com"
  TURNSTILE_SECRET_KEY?: string; // Optional: Cloudflare Turnstile for bot protection
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  course: string;
  message: string;
  website?: string; // honeypot
}

const SUBJECT_LABELS: Record<string, string> = {
  "ia-consultation": "IA Consultation",
  "ee-consultation": "EE Consultation",
  "resource-request": "Resource Request",
  "error-report": "Error/Bug Report",
  "partnership": "Partnership/Collaboration",
  "other": "Other",
};

const COURSE_LABELS: Record<string, string> = {
  "ess": "ESS",
  "biology": "Biology",
  "both": "Both ESS & Biology",
};

function validateForm(data: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Honeypot check
  if (data.website && data.website.trim() !== "") {
    errors.push("Spam detected");
    return { valid: false, errors };
  }

  // Required fields
  if (!data.name || data.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters");
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Valid email required");
  }
  if (!data.subject || !SUBJECT_LABELS[data.subject]) {
    errors.push("Valid subject required");
  }
  if (!data.message || data.message.trim().length < 20) {
    errors.push("Message must be at least 20 characters");
  }

  // Length limits
  if (data.name.length > 100) errors.push("Name too long");
  if (data.email.length > 254) errors.push("Email too long");
  if (data.message.length > 5000) errors.push("Message too long");

  return { valid: errors.length === 0, errors };
}

async function verifyTurnstile(token: string, secretKey: string, ip: string): Promise<boolean> {
  const formData = new FormData();
  formData.append("secret", secretKey);
  formData.append("response", token);
  formData.append("remoteip", ip);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData,
  });
  const result = await response.json() as { success: boolean };
  return result.success;
}

async function sendEmailViaSendGrid(env: Env, to: string, subject: string, html: string, text: string): Promise<boolean> {
  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.EMAIL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }], subject }],
      from: { email: "noreply@theibresources.com", name: "The IB Resources Contact Form" },
      content: [
        { type: "text/plain", value: text },
        { type: "text/html", value: html },
      ],
    }),
  });
  return response.ok;
}

async function sendEmailViaMailgun(env: Env, to: string, subject: string, html: string, text: string): Promise<boolean> {
  const formData = new FormData();
  formData.append("from", "The IB Resources <noreply@theibresources.com>");
  formData.append("to", to);
  formData.append("subject", subject);
  formData.append("text", text);
  formData.append("html", html);

  const response = await fetch(`https://api.mailgun.net/v3/${env.EMAIL_API_KEY.split('-')[0]}/messages`, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${btoa(`api:${env.EMAIL_API_KEY}`)}`,
    },
    body: formData,
  });
  return response.ok;
}

async function sendEmailViaResend(env: Env, to: string, subject: string, html: string, text: string): Promise<boolean> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.EMAIL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "The IB Resources <noreply@theibresources.com>",
      to: [to],
      subject,
      html,
      text,
    }),
  });
  return response.ok;
}

function buildEmailContent(data: ContactFormData): { subject: string; html: string; text: string } {
  const subjectLabel = SUBJECT_LABELS[data.subject] || data.subject;
  const courseLabel = data.course ? COURSE_LABELS[data.course] || data.course : "Not specified";

  const subject = `[The IB Resources] ${subjectLabel} - ${data.name}`;
  
  const text = `
New contact form submission from The IB Resources

Name: ${data.name}
Email: ${data.email}
Subject: ${subjectLabel}
Course: ${courseLabel}

Message:
${data.message}

---
Submitted from: https://theibresources.com/contact
Timestamp: ${new Date().toISOString()}
  `.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1C1C1C; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 12px; }
    .label { font-weight: 600; color: #555; }
    .value { margin-top: 4px; }
    .message-box { background: white; padding: 16px; border-radius: 4px; border: 1px solid #eee; white-space: pre-wrap; }
    .footer { margin-top: 20px; padding-top: 16px; border-top: 1px solid #ddd; color: #888; font-size: 12px; }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0;">The IB Resources — Contact Form</h1>
  </div>
  <div class="content">
    <div class="field">
      <div class="label">Name</div>
      <div class="value">${data.name}</div>
    </div>
    <div class="field">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
    </div>
    <div class="field">
      <div class="label">Subject</div>
      <div class="value">${subjectLabel}</div>
    </div>
    <div class="field">
      <div class="label">Course</div>
      <div class="value">${courseLabel}</div>
    </div>
    <div class="field">
      <div class="label">Message</div>
      <div class="message-box">${data.message.replace(/</g, "<").replace(/>/g, ">")}</div>
    </div>
    <div class="footer">
      Submitted from <a href="https://theibresources.com/contact" style="color: #0A6EBD;">theibresources.com/contact</a><br>
      ${new Date().toISOString()}
    </div>
  </div>
</body>
</html>
  `.trim();

  return { subject, html, text };
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, CF-Turnstile-Response",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    // Only allow POST
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN },
      });
    }

    // Origin check
    const origin = request.headers.get("Origin");
    if (origin !== env.ALLOWED_ORIGIN) {
      return new Response(JSON.stringify({ error: "Invalid origin" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Parse JSON body
    let data: ContactFormData;
    try {
      data = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN },
      });
    }

    // Validate
    const { valid, errors } = validateForm(data);
    if (!valid) {
      return new Response(JSON.stringify({ error: "Validation failed", details: errors }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN },
      });
    }

    // Optional Turnstile verification
    if (env.TURNSTILE_SECRET_KEY) {
      const turnstileToken = request.headers.get("CF-Turnstile-Response");
      const clientIP = request.headers.get("CF-Connecting-IP") || "unknown";
      if (!turnstileToken || !(await verifyTurnstile(turnstileToken, env.TURNSTILE_SECRET_KEY, clientIP))) {
        return new Response(JSON.stringify({ error: "Bot verification failed" }), {
          status: 400,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN },
        });
      }
    }

    // Build email
    const { subject, html, text } = buildEmailContent(data);

    // Send email based on provider
    let sent = false;
    switch (env.EMAIL_API_PROVIDER) {
      case "sendgrid":
        sent = await sendEmailViaSendGrid(env, env.CONTACT_EMAIL, subject, html, text);
        break;
      case "mailgun":
        sent = await sendEmailViaMailgun(env, env.CONTACT_EMAIL, subject, html, text);
        break;
      case "resend":
        sent = await sendEmailViaResend(env, env.CONTACT_EMAIL, subject, html, text);
        break;
      default:
        return new Response(JSON.stringify({ error: "Email provider not configured" }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN },
        });
    }

    if (!sent) {
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 502,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN },
      });
    }

    // Success
    return new Response(JSON.stringify({ success: true, message: "Message sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN },
    });
  },
} satisfies ExportedHandler<Env>;