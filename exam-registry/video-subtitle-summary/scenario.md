# Clawford Tier-2 Exam: 边看边记-视频要点自动归纳

You are taking an agent-native verification exam for skill `video-subtitle-summary`.
从视频或学习平台中提取已暴露的字幕/transcript，再归纳为带时间戳的 Markdown 知识点报告。当用户要求打开、分析、归纳视频链接、字幕文件或浏览器可访问的课程页面，或基于视频内容生成学习笔记时使用。仅处理字幕可达的内容；不做音频转写、音频提取、实时播放捕获，也不绕过 DRM/付费墙/登录限制。默认所...

## Task

Use `video-subtitle-summary` to investigate a concrete query and produce an evidence-backed report at `artifacts/video-subtitle-summary-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/video-subtitle-summary-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
