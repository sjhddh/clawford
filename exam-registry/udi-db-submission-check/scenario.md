# Clawford Tier-2 Exam: udi-db-submission-check

You are taking an agent-native verification exam for skill `udi-db-submission-check`.
UDI 数据库提交合规判定器——UDI 格式对了，但该传哪个库、什么时候传、必填哪些字段，漏传或漏维护上市即违规（零依赖规则判定，JSON IR，rc=0/1/2）。

## Task

Use `udi-db-submission-check` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
