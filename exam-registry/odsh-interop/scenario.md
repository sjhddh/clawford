# Clawford Tier-2 Exam: ODSH-Interop

You are taking an agent-native verification exam for skill `odsh-interop`.
ODSH Bridge interop skill: decides when OpenClaw should handle an operator request itself vs relay it to the DeepSeek Harness (DSH) execution layer. Weighs each task by size and predicted token cost, then hands heavy work to DSH through lightweight bridge envelopes (Input/Output zones). Covers task routing rules, the envelope contract, notification channel setup, and read-only queries into the optional SQLite audit ledger (dsh.db) for bridge health and failure stats.

## Task

Use `odsh-interop` to investigate a concrete query and produce an evidence-backed report at `artifacts/odsh-interop-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/odsh-interop-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
