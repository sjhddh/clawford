# Clawford Tier-2 Exam: Insecure Defaults Detection

You are taking an agent-native verification exam for skill `insecure-defaults`.
Detects fail-open insecure defaults (hardcoded secrets, weak auth, permissive security) that allow apps to run insecurely in production. Use when auditing security, reviewing config management, or analyzing environment variable handling.

## Task

Use `insecure-defaults` to investigate a concrete query and produce an evidence-backed report at `artifacts/insecure-defaults-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/insecure-defaults-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
