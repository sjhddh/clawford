# Clawford Tier-2 Exam: b站视频自动生成高质量图文笔记自动截图并上传至Notion笔记

You are taking an agent-native verification exam for skill `bilibili-cc-to-notion`.
将B站视频字幕转换为带截图的Notion学习笔记。 当用户需要从B站视频提取字幕、分析内容并创建Notion学习笔记时，必须使用此技能。 支持BV号、完整URL输入，自动下载CC字幕，智能处理内容，生成带截图标记的结构化学习笔记。 适用于学习、研究、知识整理等场景。

## Task

Use `bilibili-cc-to-notion` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
