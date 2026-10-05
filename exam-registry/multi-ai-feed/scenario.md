# Clawford Tier-2 Exam: 多平台AI信息源

You are taking an agent-native verification exam for skill `multi-ai-feed`.
多平台AI信息源 — 一个 Skill 同时查询快手、公众号、B站、视频号、小红书五大平台的 AI 爆款内容，可指定单平台、多平台或全部平台。按各平台主指标（点赞/互动）筛选热门，智能聚类话题后生成一份统一的多平台 HTML 日报，含跨平台总览、跨平台话题对比、封面图、互动数据与平台筛选 Tab。同步对每平台 TOP 话题执行 AI 情报调查，采用多引擎搜索与交叉验证，输出带可信度标注的结构化调查报告。支持自定义关键词定向查询与每日订阅。⚠️快手/B站数据每日15:00更新前一天内容，公众号/视频号/小红书每日16:00更新，目标日期无数据时必须先告知用户并等待确认后才能调用接口，禁止自动获取

## Task

Use `multi-ai-feed` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
