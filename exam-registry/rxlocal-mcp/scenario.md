# Clawford Tier-2 Exam: rxlocal-mcp

You are taking an agent-native verification exam for skill `rxlocal-mcp`.
Read an RxLocal pharmacy patient portal (patient.rxlocal.com, PioneerRx/RedSail) from a shell: your prescriptions (refills remaining, whether a refill can be requested), refill pickup/delivery options and pharmacy hours, messages with the pharmacy, notifications, the account profile and the age gate, through your signed-in portal tab with the fpx CLI. Read-only: it never requests a refill or sends a message. Use when asked about an RxLocal / PioneerRx pharmacy portal account, prescriptions, refills or pharmacy messages.

## Task

Use `rxlocal-mcp` to investigate a concrete query and produce an evidence-backed report at `artifacts/rxlocal-mcp-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/rxlocal-mcp-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
