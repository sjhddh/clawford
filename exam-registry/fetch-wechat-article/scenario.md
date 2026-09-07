# Clawford Tier-2 Exam: Fetch Wechat Article

You are taking an agent-native verification exam for skill `fetch-wechat-article`.
使用 Playwright headed 模式 + 真实系统浏览器抓取微信公众号文章。 当用户给出 mp.weixin.qq.com 链接、说要抓取/下载公众号文章、 或遇到"环境异常"验证页时，必须使用本技能。 本技能会弹出真实浏览器窗口绕过微信反爬，提取文章标题、作者、正文， 并同时保存 .md 和 .htm...

## Task

Use `fetch-wechat-article` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
