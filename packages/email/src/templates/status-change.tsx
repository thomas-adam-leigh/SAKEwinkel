import { Heading, Text } from "@react-email/components";

import type { StatusChangeEmailProps } from "../types";

import { BaseLayout } from "./base-layout";

export function StatusChangeEmail({
  firstName,
  newStatus,
  statusColor,
  reason,
  previewText,
}: StatusChangeEmailProps) {
  const statusMessages: Record<string, { title: string; message: string }> = {
    green: {
      title: "Great News!",
      message:
        "We are pleased to inform you that your learnership application has been approved. You will receive further instructions shortly.",
    },
    red: {
      title: "Application Update",
      message:
        "Unfortunately, we regret to inform you that your learnership application has not been successful at this time.",
    },
    blue: {
      title: "Application Under Review",
      message:
        "Your learnership application is currently being reviewed by our team. We will notify you once a decision has been made.",
    },
    yellow: {
      title: "Application Received",
      message:
        "Your learnership application has been received and is pending review. We will update you on the status soon.",
    },
    gray: {
      title: "Application Update",
      message: "There has been an update to your learnership application status.",
    },
  };

  const defaultStatus = {
    title: "Application Update",
    message: "There has been an update to your learnership application status.",
  };
  const statusInfo = statusMessages[statusColor] ?? defaultStatus;

  return (
    <BaseLayout previewText={previewText || `Your application status has changed to ${newStatus}`}>
      <Heading style={heading}>{statusInfo.title}</Heading>

      <Text style={paragraph}>Dear {firstName},</Text>

      <Text style={paragraph}>{statusInfo.message}</Text>

      <div style={statusBadgeContainer}>
        <span style={{ ...statusBadge, ...getStatusBadgeStyle(statusColor) }}>{newStatus}</span>
      </div>

      {reason && (
        <div style={reasonContainer}>
          <Text style={reasonLabel}>Additional Information:</Text>
          <Text style={reasonText}>{reason}</Text>
        </div>
      )}

      {statusColor === "green" && (
        <Text style={paragraph}>
          Congratulations on this achievement! Please ensure you check your email regularly for next
          steps and important information.
        </Text>
      )}

      {statusColor === "red" && (
        <Text style={paragraph}>
          We encourage you to consider reapplying in the future when new opportunities become
          available. Thank you for your interest in our learnership programme.
        </Text>
      )}

      <Text style={paragraph}>
        If you have any questions about your application, please don&apos;t hesitate to contact us.
      </Text>

      <Text style={paragraph}>
        Kind regards,
        <br />
        The B4i Academy Team
      </Text>
    </BaseLayout>
  );
}

function getStatusBadgeStyle(color: string) {
  const styles: Record<string, { backgroundColor: string; color: string }> = {
    yellow: { backgroundColor: "#fef3c7", color: "#92400e" },
    blue: { backgroundColor: "#dbeafe", color: "#1e40af" },
    green: { backgroundColor: "#dcfce7", color: "#166534" },
    red: { backgroundColor: "#fee2e2", color: "#991b1b" },
    gray: { backgroundColor: "#f3f4f6", color: "#374151" },
  };
  return styles[color] ?? styles.gray;
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

const statusBadgeContainer = {
  margin: "24px 0",
  textAlign: "center" as const,
};

const statusBadge = {
  display: "inline-block",
  padding: "8px 16px",
  borderRadius: "9999px",
  fontSize: "14px",
  fontWeight: "600",
};

const reasonContainer = {
  backgroundColor: "#f9fafb",
  borderLeft: "4px solid #0284C7",
  padding: "16px",
  margin: "16px 0 24px",
};

const reasonLabel = {
  color: "#0F2C4C",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 8px",
};

const reasonText = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0",
};
