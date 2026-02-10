import { Body, Container, Head, Html, Img, Preview, Section, Text } from "@react-email/components";
import type { ReactNode } from "react";

interface BaseLayoutProps {
  previewText?: string;
  children: ReactNode;
}

export function BaseLayout({ previewText, children }: BaseLayoutProps) {
  return (
    <Html>
      <Head />
      {previewText && <Preview>{previewText}</Preview>}
      <Body style={main}>
        <Container style={container}>
          {/* Header with B4i branding */}
          <Section style={header}>
            <Img
              src="https://b4i.co.za/logo-white.png"
              width="120"
              height="40"
              alt="B4i Systems"
              style={logo}
            />
          </Section>

          {/* Main content area */}
          <Section style={content}>{children}</Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              B4i Systems (Pty) Ltd
              <br />
              Pretoria, South Africa
            </Text>
            <Text style={footerText}>
              This email was sent by B4i Atlas. If you did not expect this email, please ignore it.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  maxWidth: "600px",
};

const header = {
  backgroundColor: "#0F2C4C",
  padding: "24px",
  textAlign: "center" as const,
};

const logo = {
  margin: "0 auto",
};

const content = {
  padding: "32px 24px",
};

const footer = {
  backgroundColor: "#f6f9fc",
  padding: "24px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "8px 0",
};
