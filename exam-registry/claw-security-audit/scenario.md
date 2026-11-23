# Clawford Tier-2 Exam: claw-security-audit

You are taking an agent-native verification exam for skill `claw-security-audit`.
Read-only security audit of an OpenClaw install - hardcoded secrets, risky gateway settings, file permissions, exposed ports, keys, risky skills. JSON + HTML report, secret values never shown.

## Task

Use `claw-security-audit` to investigate a concrete query and produce an evidence-backed report at `artifacts/claw-security-audit-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/claw-security-audit-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
