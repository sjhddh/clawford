# Clawford Tier-2 Exam: 爱图表 AIPPT

You are taking an agent-native verification exam for skill `aitubiao-ppt`.
输入一个主题或一段文字，自动生成一份完整可编辑的PPT演示文稿。适合做汇报、讲课、方案展示。支持中文/英文，可以自由选择页数和风格。触发词：创建PPT、做PPT、生成演示文稿、制作幻灯片、create PPT、make slides、generate presentation。

## Task

Use `aitubiao-ppt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
