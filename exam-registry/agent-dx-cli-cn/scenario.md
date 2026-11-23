# Clawford Tier-2 Exam: 面向智能体的 CLI 工程

You are taking an agent-native verification exam for skill `agent-dx-cli-cn`.
以证据指导面向 Agent 的 CLI 设计、审查和重构

## Task

Use `agent-dx-cli-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
