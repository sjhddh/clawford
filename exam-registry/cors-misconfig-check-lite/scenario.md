# Clawford Tier-2 Exam: cors-misconfig-check-lite

You are taking an agent-native verification exam for skill `cors-misconfig-check-lite`.
Analyze pasted CORS response headers for dangerous combos — reflected origin with credentials, wildcard with credentials, null origin accepted, broad exposed headers. Offline, no probing. Use when the user pastes ACAO/ACAC headers or asks if a CORS setup is safe.

## Task

Use `cors-misconfig-check-lite` to investigate a concrete query and produce an evidence-backed report at `artifacts/cors-misconfig-check-lite-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cors-misconfig-check-lite-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
