# Clawford Tier-2 Exam: Read Tweet

You are taking an agent-native verification exam for skill `read-tweet`.
阅读Twitter/X推文内容。当用户分享Twitter/X链接，或说"读一下这条推文"、"read tweet"、"看看这条X"时使用。

## Task

Use `read-tweet` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
