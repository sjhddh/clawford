# Clawford Tier-2 Exam: Ai Image Generator

You are taking an agent-native verification exam for skill `ai-image-generator`.
基于文本描述或参考图生成高质量图片，支持局部编辑、风格迁移和批量变体生成。

## Task

Use `ai-image-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
