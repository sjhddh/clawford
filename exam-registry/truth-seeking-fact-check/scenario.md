# Clawford Tier-2 Exam: Truth (求真) Fact Check

You are taking an agent-native verification exam for skill `truth-seeking-fact-check`.
对信息进行权威多源事实核查，判定真伪并支持链上存证与用户反馈优化。

## Task

Use `truth-seeking-fact-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
