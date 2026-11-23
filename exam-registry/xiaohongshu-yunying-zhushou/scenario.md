# Clawford Tier-2 Exam: 小红书运营分析助手

You are taking an agent-native verification exam for skill `xiaohongshu-yunying-zhushou`.
一站式小红书运营工具，融合选题灵感、数据分析模块。支持爆款标题、热点选题、粉丝分析等，覆盖小红书运营数据获取场景。支持四大能力：(1) 关键词搜索笔记/视频，可按点赞数、评论数、收藏数、发布时间、内容类型筛选排序；(2) 博主作品抓取，按主页链接获取博主的互动数据（粉丝量、点赞量或收藏量等）或公开作品列表；(3) 笔记（视频）详情，获取详情数据及互动数据等；(4) 笔记评论分析，按笔记链接获取评论内容与互动数据。用户提到小红书/xhs/rednote 且需要查数据、做选题、竞品监控、KOL筛选、评论舆情分析时调用；给关键词或链接即可，无需登录账号

## Task

Use `xiaohongshu-yunying-zhushou` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaohongshu-yunying-zhushou-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaohongshu-yunying-zhushou-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
