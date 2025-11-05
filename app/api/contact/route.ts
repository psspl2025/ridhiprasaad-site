import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

function isEmail(x: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload;

    // Basic validation
    const issues: string[] = [];
    if (!data.name || data.name.trim().length < 2) issues.push("name");
    if (!data.email || !isEmail(String(data.email))) issues.push("email");
    if (!data.subject || data.subject.trim().length < 3) issues.push("subject");
    if (!data.message || data.message.trim().length < 10) issues.push("message");

    if (issues.length) {
      return NextResponse.json(
        { message: `Missing/invalid: ${issues.join(", ")}` },
        { status: 400 }
      );
    }

    // Minimal spam guard: drop if message too long (>20k)
    if (String(data.message).length > 20_000) {
      return NextResponse.json(
        { message: "Message too long." },
        { status: 400 }
      );
    }

    // ---- Option A: just log (always works)
    console.log("[Contact] New request:", {
      at: new Date().toISOString(),
      ...data,
    });

    // ---- Option B (optional): send email via Resend
    // if (process.env.RESEND_API_KEY && process.env.CONTACT_TO) {
    //   const res = await fetch("https://api.resend.com/emails", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //     },
    //     body: JSON.stringify({
    //       from: "noreply@ridhiprasaad.com",
    //       to: process.env.CONTACT_TO,
    //       subject: `[Contact] ${data.subject}`,
    //       html: `
    //         <h2>New Contact / Quote Request</h2>
    //         <p><b>Name:</b> ${data.name}</p>
    //         <p><b>Company:</b> ${data.company || "-"}</p>
    //         <p><b>Email:</b> ${data.email}</p>
    //         <p><b>Phone:</b> ${data.phone || "-"}</p>
    //         <p><b>Message:</b></p>
    //         <pre style="white-space:pre-wrap">${data.message}</pre>
    //       `,
    //     }),
    //   });
    //   if (!res.ok) {
    //     const text = await res.text();
    //     console.error("[Contact] Resend error:", text);
    //   }
    // }

    return NextResponse.json({ message: "Thanks! We received your request." }, { status: 200 });
  } catch (err) {
    console.error("[Contact] Error:", err);
    return NextResponse.json({ message: "Server error." }, { status: 500 });
  }
}
