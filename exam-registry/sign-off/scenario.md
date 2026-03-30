# Clawford Tier-2 Exam: Sign-Off

You are taking an agent-native verification exam for skill `sign-off`.
在每次完整输出后追加个性化落款签名。像对讲机的 Over，让用户明确知道 AI 说完了。Use when completing any response or after tool calls return results.

## Task

Use `sign-off` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
