# Clawford Tier-2 Exam: VerifyGuard — AI产出预检器

You are taking an agent-native verification exam for skill `verifyguard`.
AI 产出预检工具。发布博客/提交任务前自动检查：内容完整性、链接可用性、敏感信息泄露、格式合规。受 Claude Code Verify 设计模式启发，完全原创实现，使用 Python + requests。

## Task

Use `verifyguard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
