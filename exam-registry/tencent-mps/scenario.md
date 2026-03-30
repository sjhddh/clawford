# Clawford Tier-2 Exam: Tencent MPS

You are taking an agent-native verification exam for skill `tencent-mps`.
腾讯云 MPS 媒体处理服务。只要用户的请求涉及音视频或图片的处理、生成、增强、用量查询、内容理解、媒体质检，必须使用此 Skill。覆盖：转码/压缩/格式转换、画质增强/老片修复/超分、字幕提取/翻译/语音识别、去字幕/擦除水印/人脸模糊、图片超分/美颜/降噪、音频分离/人声提取/伴奏提取、AI生图/生视频（含...

## Task

Use `tencent-mps` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
