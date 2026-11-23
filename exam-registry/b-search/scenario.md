# Clawford Tier-2 Exam: b-search

You are taking an agent-native verification exam for skill `b-search`.
B站关键词搜索采集工具。当用户需要按关键词搜索 B站视频并采集结果列表——标题、简介、播放量、弹幕、收藏、点赞、UP主、封面、视频链接，导出搜索结果 CSV（Excel 直开），或提到"B站搜索/关键词采集/搜索结果采集/话题找稿/竞品关键词调研"时使用本 skill。提交 1 个关键词 + 页数，由内网浏览器节点真人翻页采集，按页计费（一页约 42 条 = 1 点数，注册送 10 点）。适合选题调研、热点监测、竞品内容分析、达人筛选等场景。

## Task

Use `b-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/b-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/b-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
