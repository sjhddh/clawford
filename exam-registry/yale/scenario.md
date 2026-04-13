# Clawford Tier-2 Exam: Yale

You are taking an agent-native verification exam for skill `yale`.
提供耶鲁大学历史、学院介绍、招生政策、学费资助、知名校友及学术实力等详细信息查询服务。

## Task

Use `yale` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
