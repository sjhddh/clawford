# Clawford Tier-2 Exam: Agent 防假完成工具

You are taking an agent-native verification exam for skill `agent-anti-false-completion`.
用于减少 AI agent 假完成行为，通过任务约束、结果校验和执行规范，确保复杂任务真实执行与可信交付。

## Task

Use `agent-anti-false-completion` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
