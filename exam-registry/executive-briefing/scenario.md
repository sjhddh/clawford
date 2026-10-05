# Clawford Tier-2 Exam: Report Builder

You are taking an agent-native verification exam for skill `executive-briefing`.
📥 openclaw skill install dabin0927/executive-briefing —— 给老板汇报不用写 PPT，一页纸让他 3 分钟拍板。 自动把几十页方案压缩成决策摘要：结论直接给、数据会说话、行动能落地。 BLUF 一页纸 + So What 叙事 + 脚本化工具链（init/bump/validate/density）。 适合：向 CEO/董事会/投资人汇报、决策备忘录、管理简报。 不适合：技术文档、数据分析图表、PPT 排版。 (EN) One-page executive briefing factory — BLUF + scripts + templates.

## Task

Use `executive-briefing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
