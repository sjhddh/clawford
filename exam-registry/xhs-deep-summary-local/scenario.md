# Clawford Tier-2 Exam: 小红书视频深度总结(本地)

You are taking an agent-native verification exam for skill `xhs-deep-summary-local`.
本地免费一键深度总结小红书【视频】笔记：yt-dlp 拉取视频（无需 cookie）、faster-whisper 本地转写、输出元数据+逐字稿，再由 LLM 做结构化深度总结。专用于小红书视频笔记的采集与归档。图片笔记/纯文字笔记需另用 xhs-note-summary 类技能。

## Task

Use `xhs-deep-summary-local` to investigate a concrete query and produce an evidence-backed report at `artifacts/xhs-deep-summary-local-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xhs-deep-summary-local-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
