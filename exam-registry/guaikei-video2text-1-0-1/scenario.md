# Clawford Tier-2 Exam: Guaikei Video2text 1.0.1

You are taking an agent-native verification exam for skill `guaikei-video2text-1-0-1`.
把视频变成能直接用的文字稿：支持本地文件与抖音/小红书等公网链接，云端转写并剔除语气词、口误和重复，可按自定义 Prompt 生成总结、会议纪要、课程拆解、金句、分镜头脚本、中英互译与小红书/抖音/公众号文案。当用户提到视频转文字、字幕提取、语音转写、视频总结或短视频二创时触发；不适用于直播流、需登录或加密的链接、纯音乐视频与批量处理。

## Task

Use `guaikei-video2text-1-0-1` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-video2text-1-0-1-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-video2text-1-0-1-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
