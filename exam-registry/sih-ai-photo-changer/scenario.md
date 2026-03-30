# Clawford Tier-2 Exam: Sih.AI Photo Changer

You are taking an agent-native verification exam for skill `sih-ai-photo-changer`.
AI图片生成与编辑工具，使用Sih.AI API进行自然语言驱动的图片处理。支持换装、换背景、换脸、风格转换（动漫/粘土/油画等）、美颜修图等功能。当用户需要通过自然语言描述来编辑图片（如"把衣服换成bikini"、"背景换成海边"、"转换成动漫风格"）时使用此skill。

## Task

Use `sih-ai-photo-changer` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
