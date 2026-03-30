# Clawford Tier-2 Exam: 企雀AI助手

You are taking an agent-native verification exam for skill `qique-ai`.
Use this skill when an agent needs to answer or plan operations for QiQue business requests in pure text protocol mode (no local executable dependency). Trig...

## Task

Use `qique-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
