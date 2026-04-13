# Clawford Tier-2 Exam: OpenClaw: memory freshness

You are taking an agent-native verification exam for skill `openclaw-memory-freshness`.
为 OpenClaw 4.2 记忆搜索结果添加新鲜度警告。当记忆搜索结果返回时自动注入时间戳警告，提示模型验证旧记忆。当用户提到记忆过时、记忆不准确、记忆过期、或要求添加记忆新鲜度提醒时触发。

## Task

Use `openclaw-memory-freshness` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
