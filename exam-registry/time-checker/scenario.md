# Clawford Tier-2 Exam: Time Checker

You are taking an agent-native verification exam for skill `time-checker`.
Check accurate current time, date, and timezone information for any location worldwide using time.is. Use when the user asks "what time is it in X", "current time in Y", or needs to verify timezone offsets.

## Task

Use `time-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
