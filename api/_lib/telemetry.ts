import type { VercelRequest } from "@vercel/node";
import { randomBytes } from "crypto";
import { getClientIp } from "./security.js";

export interface AuditEntry {
  requestId: string;
  timestamp: string;
  route: string;
  method: string;
  ip: string;
  actorUid?: string;
  targetUid?: string;
  action: string;
  status: "success" | "error" | "rejected";
  statusCode: number;
  durationMs?: number;
  detail?: string;
}

const recentAuditLog: AuditEntry[] = [];
const MAX_AUDIT_LOG = 500;

export function generateRequestId(): string {
  return randomBytes(8).toString("hex");
}

export function logAudit(entry: AuditEntry): void {
  recentAuditLog.push(entry);
  if (recentAuditLog.length > MAX_AUDIT_LOG) {
    recentAuditLog.splice(0, recentAuditLog.length - MAX_AUDIT_LOG);
  }
  console.log(JSON.stringify({ audit: true, ...entry }));
}

export function getRecentAuditLog(): AuditEntry[] {
  return [...recentAuditLog];
}

// ---- Grading throughput metrics (cost-sensitive) ----

interface GradingMetrics {
  totalCalls: number;
  successCount: number;
  errorCount: number;
  rejectedCount: number;
  totalDurationMs: number;
  windowStart: number;
}

const METRICS_WINDOW_MS = 60 * 60 * 1000;
let gradingMetrics: GradingMetrics = {
  totalCalls: 0,
  successCount: 0,
  errorCount: 0,
  rejectedCount: 0,
  totalDurationMs: 0,
  windowStart: Date.now(),
};

export function recordGradingCall(status: "success" | "error" | "rejected", durationMs: number): void {
  const now = Date.now();
  if (now - gradingMetrics.windowStart > METRICS_WINDOW_MS) {
    gradingMetrics = { totalCalls: 0, successCount: 0, errorCount: 0, rejectedCount: 0, totalDurationMs: 0, windowStart: now };
  }
  gradingMetrics.totalCalls++;
  gradingMetrics.totalDurationMs += durationMs;
  if (status === "success") gradingMetrics.successCount++;
  else if (status === "error") gradingMetrics.errorCount++;
  else gradingMetrics.rejectedCount++;
}

export function getGradingMetrics(): GradingMetrics & { avgDurationMs: number; windowMinutes: number } {
  const windowMinutes = Math.max(1, (Date.now() - gradingMetrics.windowStart) / 60_000);
  return {
    ...gradingMetrics,
    avgDurationMs: gradingMetrics.totalCalls > 0 ? Math.round(gradingMetrics.totalDurationMs / gradingMetrics.totalCalls) : 0,
    windowMinutes: Math.round(windowMinutes * 10) / 10,
  };
}

export function createAuditContext(req: VercelRequest, route: string) {
  const requestId = generateRequestId();
  const start = Date.now();
  const ip = getClientIp(req);

  return {
    requestId,
    ip,
    route,
    method: req.method ?? "UNKNOWN",
    log(params: {
      actorUid?: string;
      targetUid?: string;
      action: string;
      status: AuditEntry["status"];
      statusCode: number;
      detail?: string;
    }) {
      logAudit({
        requestId,
        timestamp: new Date().toISOString(),
        route,
        method: req.method ?? "UNKNOWN",
        ip,
        durationMs: Date.now() - start,
        ...params,
      });
    },
  };
}
