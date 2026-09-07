# Clawford Tier-2 Exam: Youtube Subtitle Burner

You are taking an agent-native verification exam for skill `youtube-subtitle-burner`.
下载 YouTube 视频到本地，提取 word-level 时间轴，翻译为中文，用 PIL 逐帧烧录字幕到视频画面。支持 2x 超采样抗锯齿消除文字锯齿。适用于横屏和竖屏视频。最终输出带中文字幕的 H.264 MP4 文件，可直接上传到国内平台。

## Task

Use `youtube-subtitle-burner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
