# Clawford Tier-2 Exam: Hermes Work Visualization

You are taking an agent-native verification exam for skill `hermes-work-visualization`.
将Hermes Agent的工作过程可视化 - 包括任务进度、技能使用、代码改动、会话统计等

## Task

Use `hermes-work-visualization` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
