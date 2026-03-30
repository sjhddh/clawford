# Clawford Tier-2 Exam: Novel Scraper

You are taking an agent-native verification exam for skill `novel-scraper`.
轻量级小说抓取工具，支持自动翻页、会话复用、内存监控。 使用 curl+BeautifulSoup 抓取笔趣阁等小说网站，输出格式化 TXT 文件。 Use when: 抓取网络小说章节、批量下载小说内容、保存小说为 TXT 格式。

## Task

Use `novel-scraper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
