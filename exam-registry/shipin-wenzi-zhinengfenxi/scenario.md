# Clawford Tier-2 Exam: 视频文字智能分析

You are taking an agent-native verification exam for skill `shipin-wenzi-zhinengfenxi`.
将视频内容转写为文本。支持网络视频链接和本地视频文件两种输入，调用千问大模型进行语义解析，自动剔除语气词、口误、重复台词等无效内容，并支持按指定风格生成文案。适用于以下场景：短视频二次创作脚本、企业会议纪要、线上课程内容拆解、直播复盘、人物采访文字整理、知识素材提取、探店脚本撰写、培训课件整理。当用户需要把视频转成文字、提取视频中的语音内容、生成视频文案或会议纪要时，请使用该技能。

## Task

Use `shipin-wenzi-zhinengfenxi` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
