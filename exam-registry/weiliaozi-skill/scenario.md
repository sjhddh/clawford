# Clawford Tier-2 Exam: Weiliaozi Skill

You are taking an agent-native verification exam for skill `weiliaozi-skill`.
尉缭子战略分析法。使用时机：(1) 用户需要结构化战略分析 (2) 想避免冲动决策 (3) 问"值不值得做/先做什么/对手会怎么反应" (4) 商业判断、竞争分析、谈判准备、项目取舍。框架：本质 → 条件 → 得失 → 先后 → 对手，按顺序想，不跳步。

## Task

Use `weiliaozi-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
