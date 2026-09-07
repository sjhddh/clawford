# Clawford Tier-2 Exam: Huo15 Douyin Video Summary

You are taking an agent-native verification exam for skill `huo15-douyin-video-summary`.
给一个抖音视频链接，下载无水印视频并提取音频，然后配合 huo15-openclaw-asr 转写、由 OpenClaw 自身生成内容总结文稿与章节结构。脚本只做确定性下载/转码工作，转写复用 ASR skill，总结由 OpenClaw LLM 完成——无需配置任何 API key。触发词：抖音总结、抖音文稿、...

## Task

Use `huo15-douyin-video-summary` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
