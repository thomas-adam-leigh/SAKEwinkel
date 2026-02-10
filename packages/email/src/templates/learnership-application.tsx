import { Heading, Hr, Text } from "@react-email/components";

import type { LearnershipApplicationEmailProps } from "../types";

import { BaseLayout } from "./base-layout";

export function LearnershipApplicationEmail({
  firstName,
  email,
  campusChoice,
  previewText,
}: LearnershipApplicationEmailProps) {
  const campusLabel =
    campusChoice === "CAMPUS_A"
      ? "Campus A"
      : campusChoice === "CAMPUS_B"
        ? "Campus B"
        : "Cannot Attend In-Person";

  return (
    <BaseLayout
      previewText={previewText || `Thank you for your learnership application, ${firstName}!`}
    >
      <Heading style={heading}>Application Received</Heading>

      <Text style={paragraph}>Dear {firstName},</Text>

      <Text style={paragraph}>
        Thank you for submitting your learnership application to B4i Academy. We have successfully
        received your application and it is now being reviewed by our team.
      </Text>

      <Hr style={divider} />

      <Text style={subheading}>Application Summary</Text>

      <Text style={detailRow}>
        <strong>Name:</strong> {firstName}
      </Text>
      <Text style={detailRow}>
        <strong>Email:</strong> {email}
      </Text>
      <Text style={detailRow}>
        <strong>Campus Preference:</strong> {campusLabel}
      </Text>

      <Hr style={divider} />

      <Text style={subheading}>What Happens Next?</Text>

      <Text style={paragraph}>
        Our admissions team will review your application within 5-7 business days. If your
        application meets our criteria, we will contact you via WhatsApp or email to discuss the
        next steps in the selection process.
      </Text>

      <Text style={paragraph}>
        Please ensure your contact details are correct and that you have access to WhatsApp, as we
        may reach out to schedule an interview or request additional documentation.
      </Text>

      <Hr style={divider} />

      <Text style={paragraph}>
        If you have any questions about your application, please contact us at{" "}
        <a href="mailto:admissions@b4i.co.za" style={link}>
          admissions@b4i.co.za
        </a>
        .
      </Text>

      <Text style={paragraph}>
        Best regards,
        <br />
        The B4i Academy Team
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

const subheading = {
  color: "#0F2C4C",
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "24px",
  margin: "0 0 12px",
};

const paragraph = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px",
};

const detailRow = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0 0 8px",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const link = {
  color: "#0284C7",
  textDecoration: "underline",
};
