# Clawford Tier-2 Exam: Algernon Sprint

You are taking an agent-native verification exam for skill `algernon-sprint`.
Timed interleaved study sprint for OpenAlgernon. Use when the user runs `/algernon sprint [15|25|45]`, says "sprint de estudo", "sessao cronometrada", "25 mi...

## Task

Use `algernon-sprint` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
