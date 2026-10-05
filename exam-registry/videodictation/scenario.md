# Clawford Tier-2 Exam: videodictation

You are taking an agent-native verification exam for skill `videodictation`.
处理一切「视频→文字」需求：把本地视频文件或抖音、小红书等公网视频链接，转写成剔除冗余的干净文字稿，并按任意 Prompt 定制总结、小红书/抖音/公众号文案、金句提取、会议纪要、课程拆解、直播复盘、采访整理、中英互译等衍生内容。当用户提到视频转文字、字幕提取、语音转写、视频总结、提取文案、视频翻译或短视频二创时触发；不适用于直播流、需登录/会员/加密的链接、纯音乐视频或批量处理。

## Task

Use `videodictation` to investigate a concrete query and produce an evidence-backed report at `artifacts/videodictation-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/videodictation-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
