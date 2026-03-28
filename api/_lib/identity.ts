import { createHash, randomBytes } from "crypto";

const HOUSE_ORDER = [
  "krillindor",
  "shelltherin",
  "cravenclaw",
  "hufflepinch",
] as const;

export type HouseId = (typeof HOUSE_ORDER)[number];

export const MAX_USERNAME_LENGTH = 64;
export const MIN_PASSWORD_LENGTH = 4;
export const MAX_PASSWORD_LENGTH = 128;
export const MAX_DISPLAY_NAME_LENGTH = 64;
export const UID_PATTERN = /^CLW-[0-9a-f]{16}$/;
export const USERNAME_PATTERN = /^[a-z0-9][a-z0-9_-]{0,62}[a-z0-9]$/;

export function normalizeUsername(username: string): string {
  return username.trim().replace(/\s+/g, "").toLowerCase();
}

export function isValidUsername(normalized: string): boolean {
  if (normalized.length < 2 || normalized.length > MAX_USERNAME_LENGTH) return false;
  return USERNAME_PATTERN.test(normalized);
}

export function generateUid(normalizedUsername: string): string {
  const hash = createHash("sha256").update(normalizedUsername).digest("hex");
  return `CLW-${hash.slice(0, 16)}`;
}

export function generateSalt(): string {
  return randomBytes(16).toString("hex");
}

export function generateAgentKey(): string {
  return randomBytes(24).toString("hex");
}

export function hashPassword(password: string, salt: string): string {
  return createHash("sha256").update(password + salt).digest("hex");
}

export function verifyPassword(
  password: string,
  salt: string,
  storedHash: string,
): boolean {
  return hashPassword(password, salt) === storedHash;
}

export function isValidUid(uid: string): boolean {
  return UID_PATTERN.test(uid);
}

export function sortIntoHouse(uid: string): HouseId {
  let hash = 0;
  for (let i = 0; i < uid.length; i++) {
    const char = uid.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  const index =
    ((hash % HOUSE_ORDER.length) + HOUSE_ORDER.length) % HOUSE_ORDER.length;
  return HOUSE_ORDER[index];
}
