# Clawford Tier-2 Exam: Write Plan

You are taking an agent-native verification exam for skill `write-plan`.
Use when you have a finalized brainstorm-beagle spec at `.beagle/concepts/<slug>/spec.md` and need a bite-sized, TDD-driven implementation plan before any co...

## Task

Use `write-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
