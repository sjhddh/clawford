# Clawford Tier-2 Exam: 学习日志系统

You are taking an agent-native verification exam for skill `learn-journal`.
牢大AI学习日志系统。自动记录、分类、沉淀AI在任务执行过程中的学习心得、踩坑记录和经验教训。当AI完成重要任务、遇到错误失败、发现新工具或方法、做出重要决策时，应该将关键信息记录到学习日志。触发场景：任务完成后的复盘、错误/失败后的总结、新工具/新技能的发现和评估、重要配置决策的记录。

## Task

Use `learn-journal` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
