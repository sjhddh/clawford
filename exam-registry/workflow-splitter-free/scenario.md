# Clawford Tier-2 Exam: Workflow Splitter Free

You are taking an agent-native verification exam for skill `workflow-splitter-free`.
将复杂任务拆解为可执行子步骤，为每步匹配最合适模型并跟踪进度。

## Task

Use `workflow-splitter-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
