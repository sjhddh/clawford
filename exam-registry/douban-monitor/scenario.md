# Clawford Tier-2 Exam: douban-monitor

You are taking an agent-native verification exam for skill `douban-monitor`.
豆瓣高分影视监控 skill,自动发现豆瓣上近期新出现并达到门槛的电影和剧集(默认评分 >8.0、评分人数 >3000)。通过 Rexxar API + TMDB 混合抓取,纯 Python 标准库、无第三方依赖;维护状态库判定「新增命中 / 继续观察」,输出每日 Markdown 报告和暗色瀑布流网页(封面、简介、评分、短评)。支持两种运行模式:纯本地(跑完直接汇报新增影视)、本地 + GitHub Actions 双跑错峰兜底。

## Task

Use `douban-monitor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
