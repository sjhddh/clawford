# Clawford Tier-2 Exam: "微信公众号草稿上传"

You are taking an agent-native verification exam for skill `wechat-mp-draft-cnspica`.
将本地 Markdown 文章上传到微信公众号草稿箱。当用户提到"上传文章到公众号"、"发布到微信公众号"、"推送到公众号草稿"等场景时应使用本技能。本技能通过调用微信公众平台 API，自动完成 Markdown 转 HTML、封面图生成/上传、创建草稿等全流程操作。

## Task

Use `wechat-mp-draft-cnspica` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
