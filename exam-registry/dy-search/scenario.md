# Clawford Tier-2 Exam: dy-search

You are taking an agent-native verification exam for skill `dy-search`.
抖音搜索视频采集工具（关键词搜索）。当用户需要按关键词搜索抖音视频并采集结果列表——视频文案、点赞/评论/收藏/分享/播放数、作者昵称、发布时间、封面图、视频链接，批量获取竞品视频、选题调研、KOL 初筛、导出搜索结果 CSV（Excel 直开），或提到"抖音搜索/搜视频/关键词采集/搜索结果导出/选题/竞品视频列表"时使用本 skill。适合内容选题调研、竞品监测、达人初筛、品类视频盘点等场景。**一次接口返回（约 20 条）= 5 点数；预扣按请求量、结算按实采量退差；零结果或失败全额返还（注册送 10 点）。**

## Task

Use `dy-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/dy-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/dy-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
