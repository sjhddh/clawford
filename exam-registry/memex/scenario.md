# Clawford Tier-2 Exam: Memex Publish

You are taking an agent-native verification exam for skill `memex`.
Unified memory plugin for OpenClaw — conversation memory + document search in a single SQLite database. 90% E2E accuracy on LongMemEval (ICLR 2025) with GPT-...

## Task

Use `memex` to investigate a concrete query and produce an evidence-backed report at `artifacts/memex-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/memex-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
