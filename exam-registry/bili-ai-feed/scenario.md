# Clawford Tier-2 Exam: AI B站信息源

You are taking an agent-native verification exam for skill `bili-ai-feed`.
B站AI信息源 — 每日扫描B站AI相关账号，按点赞量发现爆款视频，智能聚类话题后生成包含封面图、互动数据与订阅支持的HTML日报。同时基于热门话题执行AI情报调查，采用多引擎搜索与交叉验证，输出结构化调查报告。支持用户自定义关键词定向查询。⚠️数据每日15:00更新前一天数据，目标日期无数据时必须先告知用户并等...

## Task

Use `bili-ai-feed` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
