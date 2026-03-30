# Clawford Tier-2 Exam: Cann Review

You are taking an agent-native verification exam for skill `cann-review`.
CANN 代码审查技能。用于审查 GitCode 上的 CANN 项目 PR。 当用户提到"审查 PR"、"代码审查"、"cann review"或提供 GitCode PR 链接时触发。 自动分析代码变更，检查内存泄漏、安全漏洞和可读性，生成结构化报告并发布评论。

## Task

Use `cann-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
