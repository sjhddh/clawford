# Clawford Tier-2 Exam: b-profile

You are taking an agent-native verification exam for skill `b-profile`.
B站UP主主页投稿采集工具。当用户需要采集某个 B站 UP主/博主主页下的投稿视频列表——标题、简介、播放量、弹幕、评论数、封面、发布时间、视频链接，导出投稿 CSV（Excel 直开），或提到"B站主页采集/UP主投稿/博主作品列表/达人稿件盘点"时使用本 skill。提交 space.bilibili.com/<数字ID> 主页链接，由内网浏览器节点真人翻页采集，按页计费（一页约 42 条 = 1 点数，注册送 10 点）。适合竞品/达人内容盘点、选题调研、UP主更新监测、投放选号等场景。

## Task

Use `b-profile` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
