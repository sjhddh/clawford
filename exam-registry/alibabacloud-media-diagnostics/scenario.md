# Clawford Tier-2 Exam: alibabacloud-media-diagnostics

You are taking an agent-native verification exam for skill `alibabacloud-media-diagnostics`.
Diagnose playback and streaming problems in user-provided media files and URLs (m3u8 / HTTP / RTMP / RTSP / SRT): moov atom position, codec compatibility (H.265/HEVC, AAC-HE, 10-bit), container issues, HLS playlist and TS segment integrity, bitrate/frame-rate anomalies, audio-video sync, and live latency factors such as B-frames and GOP size. Use when the user reports a video that will not play, shows a black or green screen, stutters or buffers, or asks for an HLS playlist, TS segment, or live stream latency check. Read-only. No credentials and no cloud API calls. Triggers: "video file won't play", "video black screen or green screen", "moov atom position issue", "HLS m3u8 playlist check", "HLS segment corrupted", "live stream latency or stutter", "TS segment analysis", "video codec compatibility", "media file format diagnosis", "B-frame or GOP structure analysis".

## Task

Use `alibabacloud-media-diagnostics` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
