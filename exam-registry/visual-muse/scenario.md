# Clawford Tier-2 Exam: Visual Muse

You are taking an agent-native verification exam for skill `visual-muse`.
ComfyUI 图像生成工坊 — 用自然语言描述需求，自动生成高质量 AI 图片。支持 SDXL/Flux 多模型、风格模板自动匹配、批量生成、质量评分。说「画一张图」即可触发。

## Task

Use `visual-muse` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
