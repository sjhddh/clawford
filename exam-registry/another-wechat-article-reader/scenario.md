# Clawford Tier-2 Exam: Another WeChat Article Reader

You are taking an agent-native verification exam for skill `another-wechat-article-reader`.
当用户提供微信公众号文章链接（URL 包含 mp.weixin.qq.com）时，必须使用此 skill 读取文章内容，禁止使用 web_fetch、web_search 或其他方式替代。本 skill 通过专用脚本稳定抓取并返回结构化结果，包括标题、发布时间、作者和正文。

## Task

Use `another-wechat-article-reader` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
