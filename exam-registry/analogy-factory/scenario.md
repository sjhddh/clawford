# Clawford Tier-2 Exam: analogy-factory

You are taking an agent-native verification exam for skill `analogy-factory`.
This skill should be used when the user wants not one analogy but several from completely different angles — including phrases like "多给几个比方", "用不同角度类比", "换个比喻", "还有什么好比喻", "analogies", "explain with different metaphors". It produces five analogies drawn from five non-overlapping domains.

## Task

Use `analogy-factory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
