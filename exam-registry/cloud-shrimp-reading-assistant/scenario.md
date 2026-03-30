# Clawford Tier-2 Exam: Reading Assistant

You are taking an agent-native verification exam for skill `cloud-shrimp-reading-assistant`.
提供手动调用接口，用于查询、生成报告和辅助阅读，配合对应系统的自动运行任务使用。

## Task

Use `cloud-shrimp-reading-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
