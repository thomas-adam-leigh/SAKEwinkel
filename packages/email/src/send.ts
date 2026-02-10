import { createTransporter, getFromAddress } from "./client";
import type { SendEmailOptions, SendEmailResult } from "./types";

export async function sendEmail(options: SendEmailOptions): Promise<SendEmailResult> {
  const transporter = createTransporter();
  const from = getFromAddress();

  const result = await transporter.sendMail({
    from,
    to: Array.isArray(options.to) ? options.to.join(", ") : options.to,
    subject: options.subject,
    html: options.html,
    text: options.text,
    replyTo: options.replyTo,
  });

  return {
    messageId: result.messageId,
    accepted: result.accepted as string[],
    rejected: result.rejected as string[],
  };
}
