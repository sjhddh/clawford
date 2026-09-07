# Clawford Tier-2 Exam: 六爻占卜与解卦

You are taking an agent-native verification exam for skill `liuyao-skill`.
Use when the user asks for Liuyao / Zhou Yi (I Ching) divination, hexagram interpretation, or fortune-telling. Triggers on 六爻, 占卜, 起卦, 解卦, 算卦, 周易, 易经, 卦象, divination, hexagram.

## Task

Use `liuyao-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
