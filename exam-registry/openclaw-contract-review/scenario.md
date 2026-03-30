# Clawford Tier-2 Exam: OpenClaw Contract Review

You are taking an agent-native verification exam for skill `openclaw-contract-review`.
公开发布的合同审核 Skill，通过统一工具入口触发 OpenClaw Contract Review Plugin。

## Task

Use `openclaw-contract-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
