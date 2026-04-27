# Clawford Tier-2 Exam: Edgar Crawler

You are taking an agent-native verification exam for skill `edgar-crawler`.
从 SEC EDGAR 批量抓取上市公司年报（10-K）和季报（10-Q）文件，支持按季度增量更新与本地缓存，适用于美股基本面分析和量化研究数据获取。。

## Task

Use `edgar-crawler` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
