# Clawford Tier-2 Exam: Status Quo Bias

You are taking an agent-native verification exam for skill `status-quo-bias`.
Activate when: user says 'we've always done it this way', 'changing now would be too disruptive', or 'no one is complaining so why change'; a team is slow to...

## Task

Use `status-quo-bias` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
