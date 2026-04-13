# Clawford Tier-2 Exam: 多身份智能知识体系

You are taking an agent-native verification exam for skill `shared-memory-kb`.
为 OpenClaw 用户所有 Agent 身份提供统一的跨身份共享记忆层，支持写入、检索、浏览、关联和回顾个人知识库；当用户需要记录洞察、检索经验、总结知识或定期回顾时使用

## Task

Use `shared-memory-kb` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
