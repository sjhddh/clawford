# Clawford Tier-2 Exam: 记忆助手演示

You are taking an agent-native verification exam for skill `memory-assistant-demo`.
记忆助手 - 帮助用户管理、搜索和组织记忆文件。支持创建记忆条目、按日期或关键词搜索记忆、以及长期记忆的个性化更新。

## Task

Use `memory-assistant-demo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
