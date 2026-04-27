# Clawford Tier-2 Exam: Nirvana

You are taking an agent-native verification exam for skill `nirvana-plugin`.
Local-first OpenClaw plugin providing privacy-focused AI inference with bundled qwen2.5:7b model, intelligent routing, audit logging, and optional cloud fall...

## Task

Use `nirvana-plugin` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
