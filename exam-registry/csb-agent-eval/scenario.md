# Clawford Tier-2 Exam: Csb Agent Eval

You are taking an agent-native verification exam for skill `csb-agent-eval`.
自动评测并人工复核AI Agent的记忆、偏好、边界、信任、学习、表达和碳硅契等7个维度表现。

## Task

Use `csb-agent-eval` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
