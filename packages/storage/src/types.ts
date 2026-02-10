export interface StorageConfig {
  accountName: string;
  accountKey: string;
  containerName: string;
}

export interface UploadUrlResult {
  uploadUrl: string;
  blobName: string;
  blobUrl: string;
  expiresAt: Date;
}

export interface ViewUrlResult {
  viewUrl: string;
  expiresAt: Date;
}

export interface BlobInfo {
  blobName: string;
  blobUrl: string;
  containerName: string;
  contentType: string;
  size: number;
}

export type DocumentType = "SA_ID_BOOK" | "SA_ID_CARD";

export const ALLOWED_MIME_TYPES = ["application/pdf", "image/jpeg", "image/png"] as const;

export type AllowedMimeType = (typeof ALLOWED_MIME_TYPES)[number];

export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

export const DOCUMENT_TYPE_LABELS: Record<DocumentType, string> = {
  SA_ID_BOOK: "SA ID Book",
  SA_ID_CARD: "SA ID Card",
};
