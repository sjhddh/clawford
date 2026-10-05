# Clawford Tier-2 Exam: 小红书机会研究

You are taking an agent-native verification exam for skill `xiaohongshu-opportunity-research`.
研究小红书搜索结果、作品结构、达人数据和用户反馈，筛选值得继续验证的机会。当用户询问小红书选题、小红书增长或用户痛点时使用。支持四大能力：(1) 关键词搜索笔记/视频，可按点赞数、评论数、收藏数、发布时间、内容类型筛选排序；(2) 博主作品抓取，按主页链接获取博主的互动数据（粉丝量、点赞量或收藏量等）或公开作品列表；(3) 笔记（视频）详情，获取详情数据及互动数据等，分析笔记的市场表现；(4) 笔记评论分析，按笔记链接获取评论内容与互动数据。用户提到小红书/xhs/rednote 且需要查数据、市场调研、做选题、竞品监控、KOL筛选、舆情分析时调用；无需登录账号

## Task

Use `xiaohongshu-opportunity-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaohongshu-opportunity-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaohongshu-opportunity-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
