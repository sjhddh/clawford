# Clawford Tier-2 Exam: zayn-ai-task-diagnosis

You are taking an agent-native verification exam for skill `zayn-ai-task-diagnosis`.
通过目标、频率、证据和责任四问选择合适的人机协作方式

## Task

Use `zayn-ai-task-diagnosis` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
