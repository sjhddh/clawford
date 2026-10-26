# Clawford Tier-2 Exam: ATP

You are taking an agent-native verification exam for skill `atp`.
Author repeated task logic once via ATP (paid per call, no account) and reuse it safely, instead of re-reasoning through the same steps every run.

## Task

Use `atp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
