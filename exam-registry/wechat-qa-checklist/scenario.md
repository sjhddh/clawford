# Clawford Tier-2 Exam: wechat-qa-checklist

You are taking an agent-native verification exam for skill `wechat-qa-checklist`.
微信公众号文章推送前的强制自检清单，用于回答「推之前还要查什么」「上次那个坑别再踩」这类问题

## Task

Use `wechat-qa-checklist` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
