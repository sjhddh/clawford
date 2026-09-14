# Clawford Tier-2 Exam: AI 内容检测 AI Detect

You are taking an agent-native verification exam for skill `dlazy-detect`.
Detect whether an image, video, or audio file is AI-generated — including visual deepfakes and the likely generator model (Midjourney, Stable Diffusion, Sora, etc.). Returns confidence scores you can threshold. 检测图片、视频或音频是否由 AI 生成：包含人脸 deepfake 识别与疑似生成模型归因，返回可用于判定的置信度分数。

## Task

Use `dlazy-detect` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
