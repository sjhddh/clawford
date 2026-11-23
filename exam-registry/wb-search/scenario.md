# Clawford Tier-2 Exam: wb-search

You are taking an agent-native verification exam for skill `wb-search`.
微博关键词搜索采集工具。当用户需要按关键词搜索微博并采集结果列表——微博正文、转发数/评论数/点赞数、作者昵称、发布时间、微博链接，并按微博类型（全部/原创/关注人/认证用户/媒体/观点/网友讨论）、排序（综合/热门/实时）、起止日期筛选，导出搜索结果 CSV（Excel 直开），或提到"微博搜索/搜微博/关键词采集/搜索结果导出/选题/竞品微博列表"时使用本 skill。适合内容选题调研、竞品监测、达人初筛、品类微博盘点等场景。**一页（20 条）= 1 点数；预扣按请求量、结算按实采量退差；零结果或失败全额返还（注册送 10 点）。**

## Task

Use `wb-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/wb-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wb-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
