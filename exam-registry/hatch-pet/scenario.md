# Clawford Tier-2 Exam: Codex Pet Generator

You are taking an agent-native verification exam for skill `hatch-pet`.
Turn any keyword—animal, character, brand, object, or style—into a complete installable Codex pet package. Use when a user says ‘生成 Codex 宠物’, ‘做一个宠物包’, ‘Cod...

## Task

Use `hatch-pet` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
