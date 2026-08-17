import { NextResponse } from "next/server";

const defaultRecipient = "uraspokhrel25@gmail.com";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  

  if (!apiKey) {
    return NextResponse.json({ error: "Email service is not configured yet." }, { status: 503 });
  }

  try {
    const { name, email, message }: ContactRequest = await request.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim() ||
      !/^\S+@\S+\.\S+$/.test(email)
    ) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const recipient = process.env.EMAIL_RECIEPIENT ?? defaultRecipient;
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>",
        to: [recipient],
        reply_to: email.trim(),
        subject: `Portfolio message from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Resend delivery failed", { status: response.status, details });
      return NextResponse.json({ error: "Email could not be delivered. Please try again later." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact request failed", error);
    return NextResponse.json({ error: "Invalid contact request." }, { status: 400 });
  }
}
