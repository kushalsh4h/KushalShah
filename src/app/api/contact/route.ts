import { NextResponse } from "next/server";

type ContactPayload = {
  email?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const senderEmail = body.email?.trim();

  if (!senderEmail || !EMAIL_REGEX.test(senderEmail)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "kushalsh4h@gmail.com";

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      subject: "New hire interest from portfolio",
      text: `Interested to hire. Contact email: ${senderEmail}`,
      html: `<p><strong>Interested to hire</strong></p><p>Contact email: ${senderEmail}</p>`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Could not send email right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Thanks! Your message has been sent.",
  });
}
