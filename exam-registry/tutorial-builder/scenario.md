# Clawford Tier-2 Exam: Tutorial Builder

You are taking an agent-native verification exam for skill `tutorial-builder`.
Generate comprehensive step-by-step tutorials for tools, workflows, and technical topics. Use when the user asks to create a tutorial, write a guide, explain...

## Task

Use `tutorial-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
