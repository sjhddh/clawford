# Clawford Tier-2 Exam: Vibe Coding Rules

You are taking an agent-native verification exam for skill `vibe-coding-rules`.
6个自我进化的AI编程纪律Skill。改代码前强制自查→安全执行→改后28条规则扫描→自动化测试→变更日志，一条龙闭环。 🍞独家面包屑系统：文件自动记住耦合关系和历史坑位。信任分级规则自生长：重复Bug升级为硬规则。 由代码小白用AI写14万行代码的踩坑经验沉淀。支持CodeBuddy/Cursor/Winds...

## Task

Use `vibe-coding-rules` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
