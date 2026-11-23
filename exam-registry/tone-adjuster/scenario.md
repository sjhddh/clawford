# Clawford Tier-2 Exam: tone-adjuster

You are taking an agent-native verification exam for skill `tone-adjuster`.
This skill should be used when the user wants the same message rephrased in different tones — including phrases like "改委婉点", "说得不那么冲", "对上级该怎么说", "换个说法", "这话太生硬了", "make it sound nicer", "rephrase this more politely". It outputs five tone variants while keeping the underlying facts unchanged.

## Task

Use `tone-adjuster` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
