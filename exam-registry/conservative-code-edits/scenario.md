# Clawford Tier-2 Exam: Conservative Code Edits

You are taking an agent-native verification exam for skill `conservative-code-edits`.
修改现有项目代码时强制执行保守策略，最小化改动、保留既有架构与风格、规避无关重构及共享代码风险。

## Task

Use `conservative-code-edits` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
