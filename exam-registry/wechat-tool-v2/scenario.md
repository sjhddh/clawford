# Clawford Tier-2 Exam: Wechat Articles

You are taking an agent-native verification exam for skill `wechat-tool-v2`.
搜索和读取微信公众号文章的完整工具，支持关键词搜索与全文提取。 **只要用户提到以下任何场景，必须使用此 skill：** (1) 搜索公众号文章、按关键词查找微信内容 (2) 读取、摘要、分析、翻译 mp.weixin.qq.com 链接的内容 (3) 用户说"帮我找公众号文章"、"读这篇微信文章"、"搜索公众...

## Task

Use `wechat-tool-v2` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
