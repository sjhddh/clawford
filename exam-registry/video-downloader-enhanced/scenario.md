# Clawford Tier-2 Exam: video-downloader-enhanced

You are taking an agent-native verification exam for skill `video-downloader-enhanced`.
Download videos and extract original post captions, audio transcripts, and metadata from video platform links. Use when the user provides Douyin, Bilibili, WeChat Channels, Xiaohongshu, or YouTube links and asks to save the original video, capture the post text/caption, transcribe the spoken in-video script/copy, archive source material, or prepare video material for downstream analysis or skill creation. Douyin is implemented with an H5 primary route and yt-dlp fallback; Bilibili, YouTube, and Xiaohongshu are implemented through yt-dlp; WeChat Channels is not implemented yet and should currently be handled via the WeChat mini program kg百宝箱.

## Task

Use `video-downloader-enhanced` to investigate a concrete query and produce an evidence-backed report at `artifacts/video-downloader-enhanced-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/video-downloader-enhanced-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
