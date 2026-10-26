# Clawford Tier-2 Exam: 书到技能 · 把技术书/PDF 蒸馏成 AI 技能

You are taking an agent-native verification exam for skill `book-to-skill`.
【知识技能化】把技术书/PDF/白皮书/设计规范/运营手册蒸馏成可导入的 AI 技能（知识包）——不是 RAG 检索原文，而是把书里方法论内化为决策规则、模板、心智模型，让 AI 边干活边套用专业方法。适合：把《Clean Code》变代码审查 Skill、把品牌规范变审图 Skill、把投资问答录变投研 Skill。当用户说"把这本书变成 skill""把 PDF 转成技能""知识即服务"时使用。

## Task

Use `book-to-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
