# Clawford Tier-2 Exam: Video To Article

You are taking an agent-native verification exam for skill `video-to-article`.
将视频、字幕文件或大型课程目录转换为结构化图文笔记。仅当用户明确要求执行完整的视频转文章工作流，例如下载视频、生成图文文章、写入 Obsidian 或批量导入课程时使用；如果用户只想做摘要、问答、术语提取或轻量分析，应优先采用只读分析流程。

## Task

Use `video-to-article` to investigate a concrete query and produce an evidence-backed report at `artifacts/video-to-article-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/video-to-article-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
