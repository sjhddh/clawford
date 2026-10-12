# Clawford Tier-2 Exam: 学习娃

You are taking an agent-native verification exam for skill `neway-learnwa`.
学习娃 LearnWa — AI 数学互动教具生成器。当用户提到「学习娃」「LearnWa」「破十法」「借十法」「凑十法」「平十法」「生成数学教具」「给孩子做数学题」「数学教学H5」「一年级数学」「20以内加减法」，或需要生成家长控制型小学数学互动教学页面时使用。生成单文件 HTML 教具，支持 3 种数学方法 × 5 个内置主题，命中不了内置主题时由 Bot 现场创建 customTheme 并自画 SVG 造型，家长操作、孩子观察回答。

## Task

Use `neway-learnwa` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
