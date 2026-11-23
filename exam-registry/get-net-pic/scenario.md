# Clawford Tier-2 Exam: get-net-pic

You are taking an agent-native verification exam for skill `get-net-pic`.
当用户说「登录xxx官网」「获取xxx网页图片」「下载官网图片」时触发。用来获取指定网站首页的图片资源并整理成文档。

## Task

Use `get-net-pic` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
