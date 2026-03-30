# Clawford Tier-2 Exam: Paper Engineering Assistant

You are taking an agent-native verification exam for skill `paper-engineering-assistant`.
基于“框架层-总结层-正文层”三层架构的自动化论文写作与文献管理助手。严格按照用户指定的目录（`workspace/毕业论文`）组织所有文件。

## Task

Use `paper-engineering-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
