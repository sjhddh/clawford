# Clawford Tier-2 Exam: Novel Scraper Pro

You are taking an agent-native verification exam for skill `novel-scraper-pro`.
智能小说抓取工具 V6，支持自动翻页、分页补全、章节号自动解析、内存监控、中断续抓。 使用 curl+BeautifulSoup 抓取笔趣阁等小说网站，输出格式化 TXT 文件。 默认每 10 章合并为一个文档，避免文件零散分布。 自动检测分页并补全，智能跳过非小说内容（作者感言、抽奖预告等）。 内存监控和中断续...

## Task

Use `novel-scraper-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
