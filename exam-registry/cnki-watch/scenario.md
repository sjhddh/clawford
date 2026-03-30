# Clawford Tier-2 Exam: CNKI Watch

You are taking an agent-native verification exam for skill `cnki-watch`.
Query CNKI by journal name or research topic, and create journal or topic subscriptions that periodically push new CNKI paper metadata into the main OpenClaw...

## Task

Use `cnki-watch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
