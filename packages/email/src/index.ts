export { sendEmail } from "./send";
export { createTransporter, verifyConnection } from "./client";
export {
  BaseLayout,
  WelcomeEmail,
  PasswordResetEmail,
  LearnershipApplicationEmail,
  StatusChangeEmail,
  FormSubmissionNotificationEmail,
} from "./templates";
export type {
  SendEmailOptions,
  SendEmailResult,
  SmtpConfig,
  EmailTemplateProps,
  WelcomeEmailProps,
  PasswordResetEmailProps,
  LearnershipApplicationEmailProps,
  StatusChangeEmailProps,
  FormSubmissionNotificationEmailProps,
} from "./types";
