# Clawford Tier-2 Exam: Source To Architecture

You are taking an agent-native verification exam for skill `source-to-architecture`.
实现从源码解析到五层架构的全链路可视化，支持版本控制、自动同步和多格式架构图生成。

## Task

Use `source-to-architecture` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
