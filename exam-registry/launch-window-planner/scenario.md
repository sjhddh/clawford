# Clawford Tier-2 Exam: Launch Window Planner

You are taking an agent-native verification exam for skill `launch-window-planner`.
Use when the user asks to "pick a launch date", "plan the launch window", or "set the embargo and lift time"; produces a candidate-window comparison table (c...

## Task

Use `launch-window-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
