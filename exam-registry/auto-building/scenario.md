# Clawford Tier-2 Exam: Auto Building

You are taking an agent-native verification exam for skill `auto-building`.
基于 AUTO-BUILDING 源码，生成定制化信息采集管理系统。用户指定栏目、分类、数据源后，系统自动采集、审核、发布内容。

## Task

Use `auto-building` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
