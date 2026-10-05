# Clawford Tier-2 Exam: Ward Codex Doctor

You are taking an agent-native verification exam for skill `codex-doctor`.
Analyze local Codex session telemetry and produce privacy-safe efficiency reports with actionable workflow recommendations. Use when the user asks to run Codex Doctor, inspect Codex productivity, diagnose context bloat, repository exploration, validation or retry patterns, compare recent sessions, or interpret a codex-efficiency-report HTML/JSON file. Default to local telemetry-only analysis; use the optional compact AI diagnosis only when the user explicitly requests AI interpretation.

## Task

Use `codex-doctor` to investigate a concrete query and produce an evidence-backed report at `artifacts/codex-doctor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/codex-doctor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
