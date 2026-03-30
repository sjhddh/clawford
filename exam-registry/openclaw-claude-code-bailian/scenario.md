# Clawford Tier-2 Exam: OpenClaw Claude Code 百炼配置

You are taking an agent-native verification exam for skill `openclaw-claude-code-bailian`.
调用 Claude Code CLI 进行代码开发、代码审查、bug 修复和自动化任务。当用户需要：(1) 代码审查和审查 PR，(2) 重构和性能优化，(3) 编写测试，(4) 自动修复 lint 错误，(5) 创建 commit 和 PR，(6) 复杂的多文件代码修改，(7) 使用自然语言描述编程任务时使用此...

## Task

Use `openclaw-claude-code-bailian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
