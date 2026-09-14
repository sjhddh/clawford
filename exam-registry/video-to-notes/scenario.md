# Clawford Tier-2 Exam: Video to Notes

You are taking an agent-native verification exam for skill `video-to-notes`.
将视频内容（课程/讲座/教程/纪录片/会议/演讲等）自动转为高质量结构化学习笔记。核心价值：看视频容易忘、看一遍记不住 → 转成笔记随时回看。支持本地视频文件、YouTube/B站等网络链接。流程：提取音轨 → Whisper 语音转文字 → AI 生成结构化笔记。适用场景：任何想从视频中高效学习的人——自学程序...

## Task

Use `video-to-notes` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
