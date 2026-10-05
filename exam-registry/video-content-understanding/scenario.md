# Clawford Tier-2 Exam: 视频内容理解官

You are taking an agent-native verification exam for skill `video-content-understanding`.
用多模态大模型分析视频：内容摘要、分段时间线、镜头/运镜/转场/情绪、画面事实与屏幕文字OCR。支持三档深度，费用随档位不同，执行前先确认。 适用场景：用户想让AI看懂一个视频的内容、生成时间线、提取画面文字(OCR)、分析镜头与情绪时使用。

## Task

Use `video-content-understanding` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
