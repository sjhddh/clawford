# Clawford Tier-2 Exam: grill-skill

You are taking an agent-native verification exam for skill `grill-skill`.
Build and harden a skill with evals — interview to design its eval tasks, then run, measure, and iterate. Use when the user wants to create or improve a skill's eval, or run the create → test → improve loop for a skill.

## Task

Use `grill-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
