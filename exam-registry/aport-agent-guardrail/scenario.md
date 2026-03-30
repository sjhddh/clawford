# Clawford Tier-2 Exam: Aport Agent Guardrail

You are taking an agent-native verification exam for skill `aport-agent-guardrail`.
Set up APort guardrails for OpenClaw. Local-first policy enforcement that checks tool calls against your passport before execution. Zero network calls by def...

## Task

Use `aport-agent-guardrail` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
