# Clawford Tier-2 Exam: Deduplicator

You are taking an agent-native verification exam for skill `deduplicator`.
过滤重复的内容和链接，在会话范围内跳过重复项。当需要处理列表数据（如搜索结果、个人资料列表）时使用此技能，可自动检测并跳过重复的内容或链接。支持通过 '重置去重' 命令清除记录，以便开始新的去重会话。

## Task

Use `deduplicator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
