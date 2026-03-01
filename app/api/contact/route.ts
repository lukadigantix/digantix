import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  projectDescription?: string;
  interests?: string[];
  budget?: string;
};

const ACCENT_COLOR = "#C388F8";

const normalizeBaseUrl = (value?: string) => {
  if (!value) return "";
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed.replace(/\/$/, "");
  }

  return `https://${trimmed.replace(/\/$/, "")}`;
};

const resolveLogoUrl = () => {
  const explicitLogoUrl = process.env.EMAIL_LOGO_URL?.trim();
  if (explicitLogoUrl) {
    return explicitLogoUrl;
  }

  const baseUrl =
    normalizeBaseUrl(process.env.SITE_URL) ||
    normalizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL) ||
    normalizeBaseUrl(process.env.VERCEL_URL);

  if (!baseUrl) {
    return "";
  }

  return `${baseUrl}/logo/logo-light.png`;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

const toHtmlParagraph = (value: string) => escapeHtml(value).replace(/\n/g, "<br />");

const buildEmailShell = ({
  preheader,
  title,
  subtitle,
  body,
  logoUrl,
}: {
  preheader: string;
  title: string;
  subtitle: string;
  body: string;
  logoUrl: string;
}) => `
  <div style="background:#f5f5f7;padding:24px 12px;font-family:Inter,Segoe UI,Arial,sans-serif;color:#0a0a0a;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preheader}</div>
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e9e9ee;border-radius:16px;overflow:hidden;">
      <div style="background:#0b0b0f;padding:28px 28px 20px 28px;">
        <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:${ACCENT_COLOR};font-weight:700;">
          DIGANTIX
        </div>
        ${logoUrl
          ? `<div style="margin-top:14px;"><img src="${escapeHtml(logoUrl)}" alt="Digantix" style="display:block;height:28px;width:auto;max-width:220px;" /></div>`
          : ""}
        <h1 style="margin:14px 0 8px 0;color:#ffffff;font-size:28px;line-height:1.2;font-weight:600;">${title}</h1>
        <p style="margin:0;color:#c9c9d4;font-size:15px;line-height:1.6;">${subtitle}</p>
      </div>

      <div style="padding:24px 28px 10px 28px;">${body}</div>

      <div style="padding:8px 28px 26px 28px;">
        <div style="height:1px;background:#ececf2;margin:0 0 14px 0;"></div>
        <p style="margin:0;font-size:12px;color:#7b7b87;line-height:1.5;">
          Digantix • We craft meaningful digital experiences.
        </p>
      </div>
    </div>
  </div>
`;

const buildInternalEmail = ({
  name,
  email,
  interests,
  budget,
  projectDescription,
  submittedAt,
  logoUrl,
}: {
  name: string;
  email: string;
  interests: string[];
  budget: string;
  projectDescription: string;
  submittedAt: string;
  logoUrl: string;
}) => {
  const interestChips =
    interests.length > 0
      ? interests
          .map(
            (item) =>
              `<span style="display:inline-block;background:#f3ecfb;border:1px solid #e6d4f8;color:#4f2b73;padding:6px 10px;border-radius:999px;font-size:12px;margin:0 8px 8px 0;">${escapeHtml(item)}</span>`
          )
          .join("")
      : '<span style="color:#7b7b87;font-size:14px;">Not selected</span>';

  const budgetLabel = budget ? escapeHtml(budget) : "Not selected";

  return buildEmailShell({
    preheader: `New inquiry from ${name}`,
    title: "New project inquiry",
    subtitle: "A new lead has arrived from the Services page contact form.",
    logoUrl,
    body: `
      <div style="background:#fbfbfe;border:1px solid #ececf2;border-radius:12px;padding:16px 16px 2px 16px;margin-bottom:16px;">
        <p style="margin:0 0 12px 0;font-size:13px;color:#6c6c79;text-transform:uppercase;letter-spacing:0.08em;">Lead details</p>
        <p style="margin:0 0 8px 0;font-size:15px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px 0;font-size:15px;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#5a2d86;text-decoration:none;">${escapeHtml(email)}</a></p>
        <p style="margin:0 0 8px 0;font-size:15px;"><strong>Budget:</strong> ${budgetLabel}</p>
        <p style="margin:0 0 14px 0;font-size:15px;"><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
      </div>

      <div style="margin-bottom:18px;">
        <p style="margin:0 0 10px 0;font-size:13px;color:#6c6c79;text-transform:uppercase;letter-spacing:0.08em;">Interested in</p>
        ${interestChips}
      </div>

      <div style="background:#ffffff;border:1px solid #ececf2;border-left:4px solid ${ACCENT_COLOR};border-radius:10px;padding:14px 14px 14px 12px;margin-bottom:6px;">
        <p style="margin:0 0 8px 0;font-size:13px;color:#6c6c79;text-transform:uppercase;letter-spacing:0.08em;">Project details</p>
        <p style="margin:0;font-size:15px;line-height:1.7;color:#12121a;">${toHtmlParagraph(projectDescription)}</p>
      </div>
    `,
  });
};

const buildUserConfirmationEmail = ({
  name,
  interests,
  budget,
  submittedAt,
  logoUrl,
}: {
  name: string;
  interests: string[];
  budget: string;
  submittedAt: string;
  logoUrl: string;
}) => {
  const formattedInterests = interests.length > 0 ? interests.join(", ") : "Not selected";
  const formattedBudget = budget || "Not selected";

  return buildEmailShell({
    preheader: "We received your inquiry",
    title: "Thanks for reaching out",
    subtitle: "Your project inquiry has been received successfully.",
    logoUrl,
    body: `
      <p style="margin:0 0 14px 0;font-size:16px;line-height:1.7;color:#12121a;">
        Hi ${escapeHtml(name)},<br />
        thank you for contacting Digantix. We received your message and our team will review it shortly.
      </p>

      <div style="background:#fbfbfe;border:1px solid #ececf2;border-radius:12px;padding:14px 16px;margin:0 0 14px 0;">
        <p style="margin:0 0 8px 0;font-size:13px;color:#6c6c79;text-transform:uppercase;letter-spacing:0.08em;">Summary</p>
        <p style="margin:0 0 6px 0;font-size:15px;"><strong>Interests:</strong> ${escapeHtml(formattedInterests)}</p>
        <p style="margin:0 0 6px 0;font-size:15px;"><strong>Budget:</strong> ${escapeHtml(formattedBudget)}</p>
        <p style="margin:0;font-size:15px;"><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
      </div>

      <p style="margin:0 0 8px 0;font-size:15px;line-height:1.7;color:#12121a;">
        We usually respond within 24 hours on business days.
      </p>
      <p style="margin:0;font-size:15px;line-height:1.7;color:#12121a;">
        Best regards,<br />
        <strong>Digantix Team</strong>
      </p>
    `,
  });
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const projectDescription = body.projectDescription?.trim() ?? "";
    const interests = Array.isArray(body.interests)
      ? body.interests.map((value) => value.trim()).filter(Boolean)
      : [];
    const budget = body.budget?.trim() ?? "";

    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        { message: "Name, email and project description are required." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? smtpUser;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !toEmail || !fromEmail) {
      return NextResponse.json(
        { message: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const formattedInterests = interests.length > 0 ? interests.join(", ") : "Not selected";
    const formattedBudget = budget || "Not selected";
    const logoUrl = resolveLogoUrl();

    const internalHtml = buildInternalEmail({
      name,
      email,
      interests,
      budget,
      projectDescription,
      submittedAt,
      logoUrl,
    });

    const userHtml = buildUserConfirmationEmail({
      name,
      interests,
      budget,
      submittedAt,
      logoUrl,
    });

    await transporter.sendMail({
      from: `Digantix Website <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: [
        "New project inquiry from services page",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Interested in: ${formattedInterests}`,
        `Budget: ${formattedBudget}`,
        "",
        "Project description:",
        projectDescription,
        "",
        `Submitted at: ${submittedAt}`,
      ].join("\n"),
      html: internalHtml,
    });

    await transporter.sendMail({
      from: `Digantix Team <${fromEmail}>`,
      to: email,
      subject: "We received your project inquiry — Digantix",
      text: [
        `Hi ${name},`,
        "",
        "Thank you for contacting Digantix.",
        "We received your inquiry and our team will get back to you shortly.",
        "",
        `Interests: ${formattedInterests}`,
        `Budget: ${formattedBudget}`,
        `Submitted at: ${submittedAt}`,
        "",
        "Best regards,",
        "Digantix Team",
      ].join("\n"),
      html: userHtml,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch {
    return NextResponse.json(
      { message: "An unexpected error occurred while sending your message." },
      { status: 500 }
    );
  }
}
