import { Button, Heading, Hr, Text } from "@react-email/components";

import type { FormSubmissionNotificationEmailProps } from "../types";

import { BaseLayout } from "./base-layout";

export function FormSubmissionNotificationEmail({
  formTitle,
  submissionId,
  submittedAt,
  previewData,
  viewUrl,
  previewText,
}: FormSubmissionNotificationEmailProps) {
  return (
    <BaseLayout previewText={previewText || `New submission received for ${formTitle}`}>
      <Heading style={heading}>New Form Submission</Heading>

      <Text style={paragraph}>
        A new response has been submitted to your form <strong>{formTitle}</strong>.
      </Text>

      <div style={card}>
        <Text style={cardLabel}>Submission ID</Text>
        <Text style={cardValue}>{submissionId}</Text>

        <Text style={cardLabel}>Submitted At</Text>
        <Text style={cardValue}>{submittedAt}</Text>

        {previewData && previewData.length > 0 && (
          <>
            <Hr style={divider} />
            <Text style={cardLabel}>Response Preview</Text>
            {previewData.map((item, index) => (
              <div key={index} style={previewItem}>
                <Text style={previewLabel}>{item.label}</Text>
                <Text style={previewValue}>{item.value}</Text>
              </div>
            ))}
          </>
        )}
      </div>

      <Button style={button} href={viewUrl}>
        View Full Submission
      </Button>

      <Text style={footerText}>
        You received this email because you enabled notifications for this form.
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
  margin: "0 0 24px",
};

const card = {
  backgroundColor: "#f9fafb",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  padding: "24px",
  margin: "0 0 24px",
};

const cardLabel = {
  color: "#6b7280",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  margin: "0 0 4px",
};

const cardValue = {
  color: "#111827",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0 0 16px",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "16px 0",
};

const previewItem = {
  margin: "0 0 12px",
};

const previewLabel = {
  color: "#6b7280",
  fontSize: "13px",
  fontWeight: "500",
  margin: "0 0 2px",
};

const previewValue = {
  color: "#111827",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0",
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
  margin: "0 0 24px",
};

const footerText = {
  color: "#9ca3af",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "0",
};
