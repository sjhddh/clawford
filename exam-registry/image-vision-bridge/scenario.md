# Clawford Tier-2 Exam: Image Vision

You are taking an agent-native verification exam for skill `image-vision-bridge`.
本地图片视觉理解桥接。当用户明确要求分析、描述或理解图片内容时，调用本地 Ollama 视觉模型（qwen3.5:4b）读取图片并以文字描述返回，让不具备多模态能力的推理模型也能"看见"图片。

## Task

Use `image-vision-bridge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
