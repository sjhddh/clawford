# Clawford Tier-2 Exam: identity-verify

You are taking an agent-native verification exam for skill `identity-verify`.
确认当前会话的登录入口身份，用于回答「你是哪个入口」「是不是同一个 AI 的另一个账号」「标记别搞错」这类问题

## Task

Use `identity-verify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
