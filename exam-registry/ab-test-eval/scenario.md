# Clawford Tier-2 Exam: AB Test Eval

You are taking an agent-native verification exam for skill `ab-test-eval`.
Run A/B evaluation tests for any OpenClaw skill, script, hook, or cron job. Make sure to use this skill whenever the user mentions testing, benchmarking, com...

## Task

Use `ab-test-eval` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
