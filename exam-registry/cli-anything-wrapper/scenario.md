# Clawford Tier-2 Exam: CLI Anything Wrapper

You are taking an agent-native verification exam for skill `cli-anything-wrapper`.
包装 CLI-Anything，让 OpenClaw 能调用任意软件的 CLI 功能

## Task

Use `cli-anything-wrapper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
