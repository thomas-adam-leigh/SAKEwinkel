import { BlobServiceClient, StorageSharedKeyCredential } from "@azure/storage-blob";

import { generateUploadSasToken, generateViewSasToken } from "./sas-token";
import type { StorageConfig, UploadUrlResult, ViewUrlResult } from "./types";
import { getFileExtensionFromMimeType } from "./validators";

function createBlobServiceClient(config: StorageConfig): BlobServiceClient {
  const credential = new StorageSharedKeyCredential(config.accountName, config.accountKey);

  const blobServiceUrl = `https://${config.accountName}.blob.core.windows.net`;
  return new BlobServiceClient(blobServiceUrl, credential);
}

function generateBlobName(originalFileName: string, mimeType: string, prefix?: string): string {
  const timestamp = Date.now();
  const randomSuffix = Math.random().toString(36).substring(2, 8);
  const extension = getFileExtensionFromMimeType(mimeType);
  const sanitizedName = originalFileName
    .replace(/\.[^/.]+$/, "") // Remove extension
    .replace(/[^a-zA-Z0-9-_]/g, "_") // Replace special chars
    .substring(0, 50); // Limit length

  const parts = [prefix, `${timestamp}-${randomSuffix}-${sanitizedName}.${extension}`]
    .filter(Boolean)
    .join("/");

  return parts;
}

export function getUploadUrl(
  config: StorageConfig,
  originalFileName: string,
  mimeType: string,
  prefix?: string
): UploadUrlResult {
  const blobName = generateBlobName(originalFileName, mimeType, prefix);
  const { sasToken, expiresAt } = generateUploadSasToken(config, blobName);

  const blobUrl = `https://${config.accountName}.blob.core.windows.net/${config.containerName}/${blobName}`;
  const uploadUrl = `${blobUrl}?${sasToken}`;

  return {
    uploadUrl,
    blobName,
    blobUrl,
    expiresAt,
  };
}

export function getUploadUrlWithIdNumber(
  config: StorageConfig,
  idNumber: string,
  mimeType: string,
  prefix?: string
): UploadUrlResult {
  const extension = getFileExtensionFromMimeType(mimeType);
  const blobName = prefix ? `${prefix}/${idNumber}.${extension}` : `${idNumber}.${extension}`;
  const { sasToken, expiresAt } = generateUploadSasToken(config, blobName);

  const blobUrl = `https://${config.accountName}.blob.core.windows.net/${config.containerName}/${blobName}`;
  const uploadUrl = `${blobUrl}?${sasToken}`;

  return {
    uploadUrl,
    blobName,
    blobUrl,
    expiresAt,
  };
}

export function getViewUrl(config: StorageConfig, blobName: string): ViewUrlResult {
  const { sasToken, expiresAt } = generateViewSasToken(config, blobName);
  const blobUrl = `https://${config.accountName}.blob.core.windows.net/${config.containerName}/${blobName}`;
  const viewUrl = `${blobUrl}?${sasToken}`;

  return { viewUrl, expiresAt };
}

export async function blobExists(config: StorageConfig, blobName: string): Promise<boolean> {
  const blobServiceClient = createBlobServiceClient(config);
  const containerClient = blobServiceClient.getContainerClient(config.containerName);
  const blobClient = containerClient.getBlobClient(blobName);

  return blobClient.exists();
}

export async function deleteBlob(config: StorageConfig, blobName: string): Promise<void> {
  const blobServiceClient = createBlobServiceClient(config);
  const containerClient = blobServiceClient.getContainerClient(config.containerName);
  const blobClient = containerClient.getBlobClient(blobName);

  await blobClient.deleteIfExists();
}

export async function getBlobProperties(
  config: StorageConfig,
  blobName: string
): Promise<{ contentType: string; contentLength: number } | null> {
  const blobServiceClient = createBlobServiceClient(config);
  const containerClient = blobServiceClient.getContainerClient(config.containerName);
  const blobClient = containerClient.getBlobClient(blobName);

  try {
    const properties = await blobClient.getProperties();
    return {
      contentType: properties.contentType || "application/octet-stream",
      contentLength: properties.contentLength || 0,
    };
  } catch {
    return null;
  }
}

export function getBlobUrl(config: StorageConfig, blobName: string): string {
  return `https://${config.accountName}.blob.core.windows.net/${config.containerName}/${blobName}`;
}

export { createBlobServiceClient };
