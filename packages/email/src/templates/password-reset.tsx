import { Button, Heading, Text } from "@react-email/components";

import type { PasswordResetEmailProps } from "../types";

import { BaseLayout } from "./base-layout";

export function PasswordResetEmail({
  name,
  resetUrl,
  expiresIn,
  previewText,
}: PasswordResetEmailProps) {
  return (
    <BaseLayout previewText={previewText || "Reset your B4i Atlas password"}>
      <Heading style={heading}>Reset Your Password</Heading>

      <Text style={paragraph}>Hi {name},</Text>

      <Text style={paragraph}>
        We received a request to reset your password for your B4i Atlas account. Click the button
        below to set a new password.
      </Text>

      <Button style={button} href={resetUrl}>
        Reset Password
      </Button>

      <Text style={warningText}>This link will expire in {expiresIn}.</Text>

      <Text style={paragraph}>
        If you didn&apos;t request a password reset, you can safely ignore this email. Your password
        will remain unchanged.
      </Text>

      <Text style={paragraph}>
        Best regards,
        <br />
        The B4i Team
      </Text>
    </BaseLayout>
  );
}

const heading = {
  color: "#0F2C4C",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "32px",
  margin: "0 0 24px",
};

const paragraph = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px",
};

const button = {
  backgroundColor: "#0284C7",
  borderRadius: "6px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "1",
  padding: "16px 32px",
  textAlign: "center" as const,
  textDecoration: "none",
  margin: "16px 0 24px",
};

const warningText = {
  color: "#b45309",
  fontSize: "14px",
  fontStyle: "italic",
  lineHeight: "20px",
  margin: "0 0 16px",
};
