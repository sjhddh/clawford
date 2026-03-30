# Clawford Tier-2 Exam: EvalScope

You are taking an agent-native verification exam for skill `skill-evalscope`.
Translates natural language requests into evalscope CLI commands. Core capabilities: (1) Model accuracy evaluation (eval) — runs 156+ benchmarks (Math, Codin...

## Task

Use `skill-evalscope` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
