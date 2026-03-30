# Clawford Tier-2 Exam: Wechat Mp Article Push

You are taking an agent-native verification exam for skill `wechat-mp-article-push`.
支持通过AI生成符合公众号规范的图文（文章和贴图），并推送到公众号草稿箱或直接发布，兼容其它SKILL生成的图文、图片进行推送。通过配置向导扫码授权，无需泄露公众号Secret密钥，无需配置公众号IP白名单。

## Task

Use `wechat-mp-article-push` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
