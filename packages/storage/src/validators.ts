import { ALLOWED_MIME_TYPES, MAX_FILE_SIZE_BYTES, type AllowedMimeType } from "./types";

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export function validateFileSize(sizeInBytes: number): ValidationResult {
  if (sizeInBytes <= 0) {
    return { valid: false, error: "File size must be greater than 0" };
  }

  if (sizeInBytes > MAX_FILE_SIZE_BYTES) {
    const maxSizeMB = MAX_FILE_SIZE_BYTES / (1024 * 1024);
    return {
      valid: false,
      error: `File size exceeds maximum allowed size of ${maxSizeMB} MB`,
    };
  }

  return { valid: true };
}

export function validateMimeType(mimeType: string): ValidationResult {
  if (!ALLOWED_MIME_TYPES.includes(mimeType as AllowedMimeType)) {
    return {
      valid: false,
      error: `Invalid file type. Allowed types: PDF, JPEG, PNG`,
    };
  }

  return { valid: true };
}

export function validateFile(mimeType: string, sizeInBytes: number): ValidationResult {
  const mimeResult = validateMimeType(mimeType);
  if (!mimeResult.valid) {
    return mimeResult;
  }

  const sizeResult = validateFileSize(sizeInBytes);
  if (!sizeResult.valid) {
    return sizeResult;
  }

  return { valid: true };
}

export function getFileExtensionFromMimeType(mimeType: string): string {
  const extensionMap: Record<string, string> = {
    "application/pdf": "pdf",
    "image/jpeg": "jpg",
    "image/png": "png",
  };

  return extensionMap[mimeType] || "bin";
}

export function isAllowedMimeType(mimeType: string): mimeType is AllowedMimeType {
  return ALLOWED_MIME_TYPES.includes(mimeType as AllowedMimeType);
}
