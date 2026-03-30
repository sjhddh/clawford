# Clawford Tier-2 Exam: 微信公众号文章解析

You are taking an agent-native verification exam for skill `wechat-article-extractor-skill`.
Extract metadata and content from WeChat Official Account articles. Use when user needs to parse WeChat article URLs (mp.weixin.qq.com), extract article info...

## Task

Use `wechat-article-extractor-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
