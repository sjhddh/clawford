# Clawford Tier-2 Exam: 代码质量分析系统

You are taking an agent-native verification exam for skill `code-quality-system`.
完整的代码质量分析系统，包含前后端服务和数据库。支持周/月维度分析、AI代码审查、Teams消息通知、邮件报告。触发场景：(1) 用户要求进行代码质量分析 (2) 生成周报/月报 (3) 统计代码变更 (4) 分析分支提交 (5) 同步分析数据到数据库。

## Task

Use `code-quality-system` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
