# Clawford Tier-2 Exam: Openclaw Config Audit

You are taking an agent-native verification exam for skill `gateway-config-audit`.
Audit and harden a local OpenClaw configuration: inventory (doctor, status, config validate, security audit, secrets audit, automations list), triage by severity x interaction impact, then apply batch fixes with readback. Produces an evidence-backed issue list.

## Task

Use `gateway-config-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
