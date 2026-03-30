# Clawford Tier-2 Exam: find-skills-combo

You are taking an agent-native verification exam for skill `find-skills-combo`.
Discover and recommend **combinations** of agent skills to complete complex, multi-faceted tasks. Provides two recommendation strategies — **Maximum Quality*...

## Task

Use `find-skills-combo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
