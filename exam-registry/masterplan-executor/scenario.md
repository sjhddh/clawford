# Clawford Tier-2 Exam: masterplan-executor

You are taking an agent-native verification exam for skill `masterplan-executor`.
Execute/build/implement a project strictly from an existing masterplan (the output of masterplan-builder, typically at docs/masterplan/masterplan.md in the project directory). Use whenever the user wants to start or continue actually building a project that has a masterplan — e.g. "build this", "imp

## Task

Use `masterplan-executor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
