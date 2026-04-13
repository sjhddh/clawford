# Clawford Tier-2 Exam: OpenClaw: compact improver

You are taking an agent-native verification exam for skill `openclaw-compact-improver`.
优化 OpenClaw 4.2 的 /compact 压缩命令提示词，生成结构化摘要。当用户提到压缩效果差、摘要不完整、上下文丢失、/compact 格式不好，或要求改进压缩提示词时触发。

## Task

Use `openclaw-compact-improver` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
