# Clawford Tier-2 Exam: 小红书带货达人筛选

You are taking an agent-native verification exam for skill `xiaohongshu-creator-match`.
按关键词、点赞、评论、收藏、类目和市场筛选小红书带货达人，结合达人互动数据、作品表现数据和带货效果给出合作优先级，找到真正和品类、受众及目标匹配的小红书达人候选。当用户询问达人匹配、达人筛选或合作候选时使用。支持四大能力：(1) 关键词搜索笔记/视频，可按点赞数、评论数、收藏数、发布时间、内容类型筛选排序；(2) 博主作品抓取，按主页链接获取博主的互动数据（粉丝量、点赞量或收藏量等）或公开作品列表；(3) 笔记（视频）详情，获取详情数据及互动数据等，分析笔记的市场表现；(4) 笔记评论分析，按笔记链接获取评论内容与互动数据。用户提到小红书/xhs/rednote 且需要查数据、市场调研、做选题

## Task

Use `xiaohongshu-creator-match` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaohongshu-creator-match-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaohongshu-creator-match-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
