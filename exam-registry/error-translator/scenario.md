# Clawford Tier-2 Exam: error-translator

You are taking an agent-native verification exam for skill `error-translator`.
This skill should be used when the user pastes a technical error and wants to know what it means and how to fix it — including phrases like "这个报错什么意思", "怎么修", "为什么报错", "看不懂这个错误", "this error means what", "how do I fix this error", "debug this". It translates the error into plain language, lists likely causes, and gives an ordered troubleshooting path.

## Task

Use `error-translator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
