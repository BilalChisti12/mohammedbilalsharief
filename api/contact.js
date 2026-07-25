import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, service, budget, idea } = req.body;

  // Basic validation
  if (!name || !email || !service || !idea) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Create Nodemailer transporter using Gmail
  // Uses an App Password (NOT your real Gmail password) — see README for setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,   // your Gmail address
      pass: process.env.GMAIL_PASS,   // your Gmail App Password
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,          // sends to yourself
    replyTo: email,                       // so you can reply directly to the sender
    subject: `[Portfolio] New message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #1CD8D2, #00bf8f, #302b63); padding: 24px 32px;">
          <h1 style="margin: 0; font-size: 22px; color: #fff;">New Portfolio Contact</h1>
          <p style="margin: 4px 0 0; opacity: 0.85; color: #fff; font-size: 14px;">Someone reached out via your portfolio</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; width: 130px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; font-weight: 600; color: #f1f5f9;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; font-weight: 600; color: #1CD8D2;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Service Needed</td>
              <td style="padding: 10px 0; font-weight: 600; color: #f1f5f9;">${service}</td>
            </tr>
            ${
              budget
                ? `<tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Budget</td>
              <td style="padding: 10px 0; font-weight: 600; color: #f1f5f9;">₹ ${budget}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Message / Idea</td>
              <td style="padding: 10px 0; color: #e2e8f0; line-height: 1.6; white-space: pre-wrap;">${idea}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #1e293b; margin: 24px 0;" />
          <p style="font-size: 12px; color: #475569; margin: 0;">
            You can reply directly to this email — it will go to <strong>${email}</strong>
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
}
