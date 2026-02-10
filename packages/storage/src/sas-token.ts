import {
  BlobSASPermissions,
  generateBlobSASQueryParameters,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";

import type { StorageConfig } from "./types";

const DEFAULT_UPLOAD_EXPIRY_MINUTES = 15;
const DEFAULT_VIEW_EXPIRY_MINUTES = 60;
// Use a stable, well-supported SAS version
const SAS_VERSION = "2024-11-04";
// Start token 5 minutes in the past to account for clock skew
const CLOCK_SKEW_MINUTES = 5;

export function generateUploadSasToken(
  config: StorageConfig,
  blobName: string,
  expiryMinutes: number = DEFAULT_UPLOAD_EXPIRY_MINUTES
): { sasToken: string; expiresAt: Date } {
  const credential = new StorageSharedKeyCredential(config.accountName, config.accountKey);

  const now = new Date();
  // Start in the past to account for clock skew between server and Azure
  const startsOn = new Date(now.getTime() - CLOCK_SKEW_MINUTES * 60 * 1000);
  const expiresOn = new Date(now.getTime() + expiryMinutes * 60 * 1000);

  const permissions = new BlobSASPermissions();
  permissions.write = true;
  permissions.create = true;

  const sasToken = generateBlobSASQueryParameters(
    {
      containerName: config.containerName,
      blobName,
      permissions,
      startsOn,
      expiresOn,
      version: SAS_VERSION,
    },
    credential
  ).toString();

  return { sasToken, expiresAt: expiresOn };
}

export function generateViewSasToken(
  config: StorageConfig,
  blobName: string,
  expiryMinutes: number = DEFAULT_VIEW_EXPIRY_MINUTES
): { sasToken: string; expiresAt: Date } {
  const credential = new StorageSharedKeyCredential(config.accountName, config.accountKey);

  const now = new Date();
  // Start in the past to account for clock skew between server and Azure
  const startsOn = new Date(now.getTime() - CLOCK_SKEW_MINUTES * 60 * 1000);
  const expiresOn = new Date(now.getTime() + expiryMinutes * 60 * 1000);

  const permissions = new BlobSASPermissions();
  permissions.read = true;

  const sasToken = generateBlobSASQueryParameters(
    {
      containerName: config.containerName,
      blobName,
      permissions,
      startsOn,
      expiresOn,
      version: SAS_VERSION,
    },
    credential
  ).toString();

  return { sasToken, expiresAt: expiresOn };
}

export function generateDeleteSasToken(
  config: StorageConfig,
  blobName: string,
  expiryMinutes: number = DEFAULT_UPLOAD_EXPIRY_MINUTES
): { sasToken: string; expiresAt: Date } {
  const credential = new StorageSharedKeyCredential(config.accountName, config.accountKey);

  const now = new Date();
  // Start in the past to account for clock skew between server and Azure
  const startsOn = new Date(now.getTime() - CLOCK_SKEW_MINUTES * 60 * 1000);
  const expiresOn = new Date(now.getTime() + expiryMinutes * 60 * 1000);

  const permissions = new BlobSASPermissions();
  permissions.delete = true;

  const sasToken = generateBlobSASQueryParameters(
    {
      containerName: config.containerName,
      blobName,
      permissions,
      startsOn,
      expiresOn,
      version: SAS_VERSION,
    },
    credential
  ).toString();

  return { sasToken, expiresAt: expiresOn };
}
