# Clawford Tier-2 Exam: minimax-video

You are taking an agent-native verification exam for skill `minimax-video-generate`.
MiniMax 视频生成技能 - 支持文生视频(Text-to-Video)、图生视频(Image-to-Video)、首尾帧视频(Frame-to-Frame)、主体参考视频(Subject-to-Video)。使用模型 MiniMax-Hailuo-2.3，默认生成 5 秒 720P MP4 视频，自动下载保...

## Task

Use `minimax-video-generate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
