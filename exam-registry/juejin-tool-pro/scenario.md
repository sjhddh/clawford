# Clawford Tier-2 Exam: 掘金工具专业版

You are taking an agent-native verification exam for skill `juejin-tool-pro`.
面向团队的掘金多账号矩阵批量草稿及定时发布，支持内容趋势分析、审批流治理和文章效果数据回流。

## Task

Use `juejin-tool-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
