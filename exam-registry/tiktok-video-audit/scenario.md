# Clawford Tier-2 Exam: TikTok视频审核

You are taking an agent-native verification exam for skill `tiktok-video-audit`.
TikTok 视频 AI 审核技能。当用户发送 TikTok 链接并要求审核视频、生成审核报告时触发。功能包括：(1) TikTok 短链接解析，(2) yt-dlp 下载视频，(3) OpenCV 抽帧（前10秒10帧），(4) moviepy 音频提取分析（含逐秒 RMS），(5) Lingya AI（gem...

## Task

Use `tiktok-video-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
