# Clawford Tier-2 Exam: Global Financial Downloader

You are taking an agent-native verification exam for skill `global-financial-downloader`.
全球财报智能下载器 v2.2。自动识别市场（A 股/港股/美股），自动选择爬虫。港股使用东方财富+同花顺 API，无需认证。美股外国公司（ADR）自动使用 20-F/6-K 替代 10-K/10-Q。subprocess 替代 os.system，错误检查+输出捕获。支持 --dry-run 预览、下载后自动验证。

## Task

Use `global-financial-downloader` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
