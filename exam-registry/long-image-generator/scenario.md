# Clawford Tier-2 Exam: Long Image Generator

You are taking an agent-native verification exam for skill `long-image-generator`.
Generative AI 长图（竖版图片）制作技能。使用 canvas 将文本、LaTeX 公式、图表等内容渲染为长条形图片（1080x+ 像素），适用于课程笔记、知识卡片、学习指南、读书笔记、思维导图等场景。 触发时机：(1) 用户要求"生成一张长图"或"做个长图" (2) 用户提到"竖图"、"海报"、"知识...

## Task

Use `long-image-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
