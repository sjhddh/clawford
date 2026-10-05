# Clawford Tier-2 Exam: alibabacloud-cdn-refresh-preload

You are taking an agent-native verification exam for skill `alibabacloud-cdn-refresh-preload`.
Read-only diagnostics for Alibaba Cloud CDN refresh and preload issues. Use when a URL/file/directory refresh or preload looks ineffective - refresh failed, preload failed, cache not cleared, or the task failed. Verifies task records and edge cache status, and produces a diagnosis report; never submits refresh/preload jobs. Triggers: "refresh failed", "preload failed", "cache not cleared", "purge not working", "prefetch not cached", "warm up ineffective", "invalidation unsuccessful", "pre-warming failure", "pre-fetching".

## Task

Use `alibabacloud-cdn-refresh-preload` to investigate a concrete query and produce an evidence-backed report at `artifacts/alibabacloud-cdn-refresh-preload-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alibabacloud-cdn-refresh-preload-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
