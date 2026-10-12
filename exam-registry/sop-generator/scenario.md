# Clawford Tier-2 Exam: 标准操作程序生成

You are taking an agent-native verification exam for skill `sop-generator`.
把重复工作拆成可执行、可质检、可交接和可自动化的标准流程

## Task

Use `sop-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
