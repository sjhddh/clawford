# Clawford Tier-2 Exam: cross-session-passphrase

You are taking an agent-native verification exam for skill `cross-session-passphrase`.
跨会话口令沟通 + 主动式并行会话感知，用于回答「怎么让另一个窗口读到这份文件」「并行会话之间怎么传结论」「另一个会话刚才做了什么」这类问题

## Task

Use `cross-session-passphrase` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
