import { Router, type IRouter } from "express";
import { z } from "zod";
import { ReplitConnectors } from "@replit/connectors-sdk";
import { logger } from "../lib/logger";

const connectors = new ReplitConnectors();

const ContactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().default(""),
  language: z.string().optional().default("en"),
  interestType: z.string().optional().default(""),
  propertyType: z.string().optional().default(""),
  location: z.string().optional().default(""),
  citizenshipProgram: z.string().optional().default(""),
  budget: z.string().optional().default(""),
  message: z.string().optional().default(""),
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml(data: z.infer<typeof ContactFormSchema>): string {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
  ];
  if (data.phone) rows.push(["Phone", data.phone]);
  if (data.language) rows.push(["Preferred Language", data.language]);
  if (data.interestType) rows.push(["Interest", data.interestType]);
  if (data.propertyType) rows.push(["Property Type", data.propertyType]);
  if (data.location) rows.push(["Location", data.location]);
  if (data.citizenshipProgram) rows.push(["Citizenship Program", data.citizenshipProgram]);
  if (data.budget) rows.push(["Budget", data.budget]);
  if (data.message) rows.push(["Message", data.message]);

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#2A2A2A;border-bottom:1px solid #eee;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#555;border-bottom:1px solid #eee;vertical-align:top;">${escapeHtml(value).replace(/\n/g, "<br/>")}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#2A2A2A;padding:24px;text-align:center;">
        <h1 style="color:#C4A265;margin:0;font-size:20px;">New Consultation Request</h1>
        <p style="color:#999;margin:8px 0 0;font-size:13px;">EV Richmond Property Group</p>
      </div>
      <div style="padding:24px;">
        <table style="width:100%;border-collapse:collapse;">
          ${tableRows}
        </table>
      </div>
      <div style="background:#f5f0e8;padding:16px;text-align:center;font-size:12px;color:#999;">
        This message was sent from the website consultation form.
      </div>
    </div>
  `;
}

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  try {
    const parsed = ContactFormSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Invalid form data", details: parsed.error.issues });
      return;
    }

    const data = parsed.data;
    const subject = `New Consultation: ${data.name} — ${data.interestType || "General Inquiry"}`;
    const htmlBody = buildEmailHtml(data);

    const meResponse = await connectors.proxy("outlook", "/v1.0/me", { method: "GET" });
    const meData = await meResponse.json() as { mail?: string; userPrincipalName?: string };
    const userEmail = meData.mail || meData.userPrincipalName;

    if (!userEmail) {
      logger.error("Could not determine Outlook user email");
      res.status(500).json({ error: "Email configuration error" });
      return;
    }

    const sendResponse = await connectors.proxy("outlook", "/v1.0/me/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: {
          subject,
          body: {
            contentType: "HTML",
            content: htmlBody,
          },
          toRecipients: [
            { emailAddress: { address: userEmail } },
          ],
          replyTo: [
            { emailAddress: { address: data.email, name: data.name } },
          ],
        },
      }),
    });

    if (!sendResponse.ok) {
      const errBody = await sendResponse.text();
      logger.error({ status: sendResponse.status, body: errBody }, "Failed to send email via Outlook");
      res.status(502).json({ error: "Failed to send email" });
      return;
    }

    logger.info({ name: data.name, email: data.email, interest: data.interestType }, "Consultation email sent");
    res.json({ success: true });
  } catch (err) {
    logger.error(err, "Contact form error");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
