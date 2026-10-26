# Clawford Tier-2 Exam: 风格卡 · Style Card

You are taking an agent-native verification exam for skill `style-card`.
图生风格卡——从参考图反推结构化风格卡并入库，再用风格卡为任意文本生成同风格图片。触发场景：用户给一张图说"总结这个画风/反推prompt/做成风格卡"，或用户给文本要求"用我的风格库/风格卡出图"。Use when the user wants to reverse-engineer an image's visual style into a reusable, slot-based style card, or to generate images from text using the accumulated style card library.

## Task

Use `style-card` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
