# Clawford Tier-2 Exam: Stop Asking and Just Do It

You are taking an agent-native verification exam for skill `just-do-it`.
Autonomous programming mode for openclaw.ai. Use this skill whenever a user requests any code change, feature addition, refactor, bug fix, or project task —...

## Task

Use `just-do-it` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
