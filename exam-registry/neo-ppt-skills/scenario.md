# Clawford Tier-2 Exam: neo_ppt_skills

You are taking an agent-native verification exam for skill `neo-ppt-skills`.
以 GordenSuperPPTSkill 为主线的端到端 PPT 生产技能：阶段一用 imagegen 逐页生成「图片型 PPT」，阶段二把每页图四层还原为可编辑 PPTX（背景图/骨架图/元素图标/真文本），同时交付图片型 PPT 与可编辑 PPTX。另内置 bank-all（27 套 577 页）与 bank-lite（18 套 339 页）银行营销合辑模板的 GordenPPTSkill 快线换字，以及图片矢量复刻备选管线。当用户要"端到端出一份既好看又能编辑的 PPT"、"按主题/文章出 PPT"、"用 bank 模板换字出稿"、"把图片转成可编辑 PPTX"时使用。

## Task

Use `neo-ppt-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
