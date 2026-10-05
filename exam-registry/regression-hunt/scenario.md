# Clawford Tier-2 Exam: regression-hunt

You are taking an agent-native verification exam for skill `regression-hunt`.
Find what a change can break in the code that did NOT change — trace a diff, branch, commit range, or named feature outward through callers, consumers, shared state, and contracts, rank the concrete regression scenarios by blast radius, and prove or clear each one with an observed test run. Zero regressions is a valid outcome. Use this skill whenever the user says "look for regressions", "what could this break", "did this change break anything", "regression check", "impact of this change", "blast radius", "what else uses this", "is anything else affected", or "/regression-hunt" — even if they don't name the skill. Not for reviewing the diff's own quality (code-review) or a bug already observed (diagnose).

## Task

Use `regression-hunt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
