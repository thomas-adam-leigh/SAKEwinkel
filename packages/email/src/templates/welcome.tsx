import { Button, Heading, Text } from "@react-email/components";

import type { WelcomeEmailProps } from "../types";

import { BaseLayout } from "./base-layout";

export function WelcomeEmail({ name, loginUrl, previewText }: WelcomeEmailProps) {
  return (
    <BaseLayout previewText={previewText || `Welcome to B4i Atlas, ${name}!`}>
      <Heading style={heading}>Welcome to B4i Atlas</Heading>

      <Text style={paragraph}>Hi {name},</Text>

      <Text style={paragraph}>
        Your account has been created successfully. You can now access B4i Atlas and start managing
        your projects.
      </Text>

      <Button style={button} href={loginUrl}>
        Sign In to Your Account
      </Button>

      <Text style={paragraph}>
        If you have any questions or need assistance, please don&apos;t hesitate to reach out to our
        support team.
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
