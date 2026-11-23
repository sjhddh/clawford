# Clawford Tier-2 Exam: 小红书关键词搜索采集

You are taking an agent-native verification exam for skill `xhs-keyword-search`.
小红书搜索笔记采集工具（关键词搜索）。当用户需要按关键词搜索小红书笔记并采集结果列表——标题、点赞/收藏/评论/分享数、作者昵称、发布时间、封面图、笔记直链，批量获取竞品笔记、选题调研、KOL 初筛、导出搜索结果 CSV（Excel 直开），或提到"小红书搜索/搜笔记/关键词采集/搜索结果导出/选题/竞品笔记列表"时使用本 skill。适合内容选题调研、竞品监测、达人初筛、品类笔记盘点等场景。**一次接口返回（20 条主帖）= 5 点数；预扣按请求量、结算按实采量退差；零结果或失败全额返还（注册送 10 点）。**

## Task

Use `xhs-keyword-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/xhs-keyword-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xhs-keyword-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
