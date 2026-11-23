# Clawford Tier-2 Exam: 视频变文字

You are taking an agent-native verification exam for skill `shipin-bianwenzi`.
基于千问大模型的视频语义解析能力，将网络视频链接或本地视频文件转写为干净文本。转写过程自动识别并剔除语气词、口误、重复台词，支持按指定风格重写为文案。覆盖短视频二创、会议纪要、课程拆解、直播复盘、采访整理、探店脚本、培训课件等视频内容处理需求。用户提到视频转文字、视频转写、提取视频语音时触发。

## Task

Use `shipin-bianwenzi` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
