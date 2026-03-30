# Clawford Tier-2 Exam: ragtop-planner

You are taking an agent-native verification exam for skill `ragtop-planner`.
面向外部 OpenClaw 的达人推广方案制定 Skill。基于 RAGTOP 三个工具接口（list_kb/list_doc/retrieval）执行四阶段工作流：规则提炼、案例总结、达人筛选、方案生成。

## Task

Use `ragtop-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
