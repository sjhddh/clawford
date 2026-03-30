# Clawford Tier-2 Exam: Mem0 Status Check

You are taking an agent-native verification exam for skill `mem0-status-check`.
检查 mem0 本地记忆系统的功能完整性和运行状态。每次被问到 mem0 功能、状态、是否完整时触发。 触发词：mem0状态、mem0功能、检查mem0、mem0正常吗、mem0完整性

## Task

Use `mem0-status-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
