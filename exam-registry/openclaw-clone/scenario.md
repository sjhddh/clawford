# Clawford Tier-2 Exam: 复制学习别人养好的 OpenClaw

You are taking an agent-native verification exam for skill `openclaw-clone`.
Clone and learn from a well-trained OpenClaw instance. Use when: (1) User wants to copy someone else's OpenClaw configuration, (2) User wants to learn from a...

## Task

Use `openclaw-clone` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
