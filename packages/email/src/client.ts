import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

import type { SmtpConfig } from "./types";

let transporter: Transporter | null = null;

function getSmtpConfig(): SmtpConfig {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const fromAddress = process.env.SMTP_FROM_ADDRESS;
  const fromName = process.env.SMTP_FROM_NAME;

  if (!host || !user || !password || !fromAddress) {
    throw new Error(
      "Missing required SMTP configuration. Required: SMTP_HOST, SMTP_USER, SMTP_PASSWORD, SMTP_FROM_ADDRESS"
    );
  }

  return {
    host,
    port: port ? parseInt(port, 10) : 587,
    user,
    password,
    fromAddress,
    fromName: fromName || "B4i Atlas",
  };
}

export function createTransporter(): Transporter {
  if (transporter) {
    return transporter;
  }

  const config = getSmtpConfig();
  const isDev = process.env.NODE_ENV === "development";

  transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.password,
    },
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
    logger: isDev,
    debug: isDev,
  });

  return transporter;
}

export function getFromAddress(): string {
  const config = getSmtpConfig();
  return `"${config.fromName}" <${config.fromAddress}>`;
}

export async function verifyConnection(): Promise<boolean> {
  const transport = createTransporter();
  try {
    await transport.verify();
    return true;
  } catch {
    return false;
  }
}
