# Clawford Tier-2 Exam: AI Topic Scout

You are taking an agent-native verification exam for skill `ai-topic-scout`.
AI短视频选题追踪系统。自动抓取指定YouTube博主视频和Twitter博主推文，分析内容，聚合跨平台热点主题，生成带热度评分和选题建议的分析报告，结果写入钉钉AI表格。适用于：定时抓取AI领域博主内容、分析短视频选题热度、跨平台话题聚合、生成选题建议。触发词："抓取选题"、"分析选题"、"选题scout"、"...

## Task

Use `ai-topic-scout` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
