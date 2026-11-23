# Clawford Tier-2 Exam: guaikei视频里的话转文字

You are taking an agent-native verification exam for skill `guaikei-video-speech-to-text`.
将视频内容转写并加工为可复用文案。典型触发：视频转文字、提取视频文案、视频转稿、字幕提取、视频总结、金句提取、视频内容分析、会议纪要、课程拆解、直播复盘、采访整理。支持本地文件与抖音、小红书等平台链接，云端解析，自定义 Prompt 可生成总结、改写、分镜头、翻译等。不适用于直播流、需登录或加密的链接、纯音乐视频与批量处理。

## Task

Use `guaikei-video-speech-to-text` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-video-speech-to-text-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-video-speech-to-text-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
