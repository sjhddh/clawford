# Clawford Tier-2 Exam: Agent评估设计顾问

You are taking an agent-native verification exam for skill `agent-design-advisor`.
评估工作流是否适合用 AI Agent 实现，并基于最佳实践给出设计建议。 当用户描述一个工作流并想判断是否适合用 Agent 实现时触发。

## Task

Use `agent-design-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
