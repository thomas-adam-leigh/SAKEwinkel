export interface SmtpConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  fromAddress: string;
  fromName: string;
}

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

export interface SendEmailResult {
  messageId: string;
  accepted: string[];
  rejected: string[];
}

export interface EmailTemplateProps {
  previewText?: string;
}

export interface WelcomeEmailProps extends EmailTemplateProps {
  name: string;
  loginUrl: string;
}

export interface PasswordResetEmailProps extends EmailTemplateProps {
  name: string;
  resetUrl: string;
  expiresIn: string;
}

export interface LearnershipApplicationEmailProps extends EmailTemplateProps {
  firstName: string;
  email: string;
  campusChoice: "CAMPUS_A" | "CAMPUS_B" | "CANNOT_ATTEND";
}

export interface StatusChangeEmailProps extends EmailTemplateProps {
  firstName: string;
  newStatus: string;
  statusColor: "yellow" | "blue" | "green" | "red" | "gray";
  reason?: string;
  applicationUrl?: string;
}

export interface FormSubmissionNotificationEmailProps extends EmailTemplateProps {
  formTitle: string;
  submissionId: string;
  submittedAt: string;
  previewData?: Array<{ label: string; value: string }>;
  viewUrl: string;
}
