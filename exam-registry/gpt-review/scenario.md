# Clawford Tier-2 Exam: Gpt Review

You are taking an agent-native verification exam for skill `gpt-review`.
通过 Brave 浏览器自动发送审稿请求给 ChatGPT，获取文章的事实核查、逻辑检查及AI痕迹检测反馈。

## Task

Use `gpt-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
