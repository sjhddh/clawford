# Clawford Tier-2 Exam: 抓取某个微博用户在某个时间发的微博内容。只需要说：抓一下XXX的微博。

You are taking an agent-native verification exam for skill `weibo-scraper`.
抓取指定微博用户的帖子内容。当用户提到"抓微博"、"微博内容"、"看微博"、"weibo"、"某人微博"等关键词时使用此 skill。支持按日期筛选、自动获取长文全文、滚动加载防遗漏。基于 m.weibo.cn 移动端 + browser 工具实现，无需登录即可抓取公开微博。

## Task

Use `weibo-scraper` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
