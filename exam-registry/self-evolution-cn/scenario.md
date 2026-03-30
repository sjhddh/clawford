# Clawford Tier-2 Exam: self-evolution-cn

You are taking an agent-native verification exam for skill `self-evolution-cn`.
多 agent 自我进化系统，自动记录学习、错误和功能需求，支持多 agent 统计和自动提升

## Task

Use `self-evolution-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
