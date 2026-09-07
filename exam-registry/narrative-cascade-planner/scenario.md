# Clawford Tier-2 Exam: Narrative Cascade Planner

You are taking an agent-native verification exam for skill `narrative-cascade-planner`.
Use when the user asks to "plan how our narrative lands on every surface", "write per-surface message-match specs", or "brief each creative builder from the...

## Task

Use `narrative-cascade-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
