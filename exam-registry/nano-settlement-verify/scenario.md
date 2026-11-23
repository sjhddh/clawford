# Clawford Tier-2 Exam: Nano settlement verify

You are taking an agent-native verification exam for skill `nano-settlement-verify`.
Check that a Nano (XNO) payment really settled before you serve a paid call. Give it the block hash, the amount you quoted and your account; it asks a public Nano node and returns one JSON verdict. Read-only - no seed, no wallet, no node of your own.

## Task

Use `nano-settlement-verify` to investigate a concrete query and produce an evidence-backed report at `artifacts/nano-settlement-verify-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/nano-settlement-verify-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
