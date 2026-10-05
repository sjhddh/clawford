# Clawford Tier-2 Exam: patent-avoidance-design

You are taking an agent-native verification exam for skill `patent-avoidance-design`.
基于TRIZ方法论的完整专利规避设计流程。 当用户要求分析专利进行规避设计、生成不侵权替代方案、或进行专利规避分析时使用。 触发词包括："专利规避"、"规避设计"、"专利规避设计"、"不侵权方案"、"patent avoidance"、"生成不侵权方案"。 本技能嵌套调用 patent-claim-to-funcmodel 子技能完成功能模型还原（8步）， 然后执行：(1) TRIZ裁剪（规则A/B/C），(2) 功能导向检索FOS， (3) 非等效方案生成，(4) 侵权判定（全面覆盖原则 + 等同原则 + 禁止反悔原则）。

## Task

Use `patent-avoidance-design` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
