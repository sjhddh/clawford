# Clawford Tier-2 Exam: find-ebooks / 搜好书

You are taking an agent-native verification exam for skill `find-ebooks`.
搜好书 — 基于安娜档案(Anna's Archive)的电子书搜索引擎，覆盖 6 大中文图书平台。 搜索 epub/pdf 格式电子书，获取完整元数据（书名、作者、年份、语言、大小、格式） 和多源下载链接（慢速下载/快速下载/Amazon/微信读书），同时查询豆瓣读书、掌阅、 天猫图书、当当网、京东图书、机械工业出版社的图书上架信息。

## Task

Use `find-ebooks` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
