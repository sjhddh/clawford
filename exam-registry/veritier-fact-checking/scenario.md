# Clawford Tier-2 Exam: Veritier Fact Checking

You are taking an agent-native verification exam for skill `veritier-fact-checking`.
Real-time fact-checking and claim verification. Use this skill to verify factual claims in any text and get structured verdicts with source evidence. Connect...

## Task

Use `veritier-fact-checking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
