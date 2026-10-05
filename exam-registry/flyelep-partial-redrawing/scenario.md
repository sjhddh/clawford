# Clawford Tier-2 Exam: partial-redrawing

You are taking an agent-native verification exam for skill `flyelep-partial-redrawing`.
通过 Flyelep AI 工具接口对图片局部区域进行重绘，可结合文本提示词和参考替换图生成新图。 当用户要求局部修改图片、替换背景、替换某个区域内容、保留主体仅改局部时使用此技能。

## Task

Use `flyelep-partial-redrawing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
