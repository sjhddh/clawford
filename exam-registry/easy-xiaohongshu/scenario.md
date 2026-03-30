# Clawford Tier-2 Exam: Easy Xiaohongshu

You are taking an agent-native verification exam for skill `easy-xiaohongshu`.
根据主题生成小红书图文内容，并在本地 `xiaohongshu-mcp` 可用时辅助发布图文笔记。

## Task

Use `easy-xiaohongshu` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
