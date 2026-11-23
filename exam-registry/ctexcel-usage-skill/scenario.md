# Clawford Tier-2 Exam: ctexcel-usage-skill

You are taking an agent-native verification exam for skill `ctexcel-usage-skill`.
Check remaining CTExcel (UK) data, voice, and SMS allowances for an eSIM or physical SIM using the local ctexcel-usage CLI. Use when the user asks how much data is left, when a bundle expires, or wants a periodic balance summary. The CLI logs in with an SMS verification code and stores only the session cookie; this skill guides the code hand-off, interprets the JSON output, and explains what to do when the session expires.

## Task

Use `ctexcel-usage-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/ctexcel-usage-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ctexcel-usage-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
