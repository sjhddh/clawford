# Clawford Tier-2 Exam: Skill Eval

You are taking an agent-native verification exam for skill `openclaw-skill-eval`.
Skill evaluation framework. Use when: testing trigger rate, quality compare (with/without skill), or model comparison. Runs via sessions_spawn + sessions_his...

## Task

Use `openclaw-skill-eval` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
