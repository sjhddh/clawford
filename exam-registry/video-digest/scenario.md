# Clawford Tier-2 Exam: Video Deep Reader · 视频深读

You are taking an agent-native verification exam for skill `video-digest`.
把一段视频变成能读的笔记——公开字幕抓进本地私有缓存，按时间戳产出 Quick / Deep / Research 三档笔记，每句都能定位回原片。适合"三十分钟的视频只想花三分钟"和"口播内容想存成可检索文字"。Turn a video into timestamped Quick / Deep / Research notes from public captions or a supplied transcript, cached privately per user. Use when the user shares a video link and wants a summary, deep notes, or a citation-ready excerpt; also when they ask whether captions are available or why transcript fetching fails.

## Task

Use `video-digest` to investigate a concrete query and produce an evidence-backed report at `artifacts/video-digest-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/video-digest-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
