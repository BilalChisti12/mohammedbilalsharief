// Server to handle the /api/contact Nodemailer endpoint and serve the frontend
// Can be run locally via `npm run dev:api` alongside vite for development
// Or run in production via `npm start` (node server.js) after building the app

import express from "express";
import nodemailer from "nodemailer";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env manually for dev
try {
  const envFile = readFileSync(resolve(__dirname, ".env"), "utf8");
  envFile.split("\n").forEach((line) => {
    const [key, ...val] = line.split("=");
    if (key && val.length) process.env[key.trim()] = val.join("=").trim();
  });
} catch {
  // .env not found — use system env
}

const app = express();
app.use(express.json());

// Serve static files from the React build if they exist (for production hosting)
app.use(express.static(resolve(__dirname, "dist")));

app.post("/api/contact", async (req, res) => {
  const { name, email, service, budget, idea } = req.body;

  if (!name || !email || !service || !idea) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `[Portfolio] New message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #1CD8D2, #00bf8f, #302b63); padding: 24px 32px;">
          <h1 style="margin: 0; font-size: 22px; color: #fff;">New Portfolio Contact</h1>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #94a3b8; font-size: 13px; width: 130px;">Name</td><td style="padding: 10px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: #94a3b8; font-size: 13px;">Email</td><td style="padding: 10px 0; color: #1CD8D2;">${email}</td></tr>
            <tr><td style="padding: 10px 0; color: #94a3b8; font-size: 13px;">Service</td><td style="padding: 10px 0;">${service}</td></tr>
            ${budget ? `<tr><td style="padding: 10px 0; color: #94a3b8; font-size: 13px;">Budget</td><td style="padding: 10px 0;">₹ ${budget}</td></tr>` : ""}
            <tr><td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Message</td><td style="padding: 10px 0; white-space: pre-wrap;">${idea}</td></tr>
          </table>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Nodemailer error:", err.message);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

// Fallback for React Single Page Application routing (sends index.html for any unknown route)
app.get("*", (req, res) => {
  res.sendFile(resolve(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
