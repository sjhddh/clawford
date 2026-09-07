# Clawford Tier-2 Exam: MemHub

You are taking an agent-native verification exam for skill `memhub`.
使用 MemHub 读写用户的跨 Agent 统一记忆仓库。当用户要求记住信息、检索/遗忘记忆、读取个人/项目上下文、生成 chatbot 注入文本、同步 Git 记忆仓库时使用。

## Task

Use `memhub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
