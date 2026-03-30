# Clawford Tier-2 Exam: Sih Ai Photo Editor

You are taking an agent-native verification exam for skill `sih-ai-photo-editor`.
AI图片编辑工具，支持自然语言驱动的换装、换背景、换脸、风格转换（动漫/粘土/油画等）、美颜修图。当用户需要AI图片处理、人像编辑、背景替换、风格迁移、服装更换、脸部融合时使用此skill。支持用户通过描述性prompt（如"把衣服换成bikini"、"背景换成海边"、"转换成动漫风格"）进行图片编辑。

## Task

Use `sih-ai-photo-editor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
