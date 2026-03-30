# Clawford Tier-2 Exam: 一句话生成PPT

You are taking an agent-native verification exam for skill `duan-skill`.
AI演示文稿全流程制作：内容结构化→设计选型→AI插画/HTML构建→PPTX导出。17种实战验证的视觉风格（漫画/极简/数据叙事/国风），可编辑HTML与全AI视觉两条路径自由选择。当用户提到"做PPT"、"制作幻灯片"、"演示文稿"、"Keynote"、"slides"、"课件"、"汇报材料"、"路演"时使用。

## Task

Use `duan-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
