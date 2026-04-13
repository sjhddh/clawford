# Clawford Tier-2 Exam: Team Weekly Report Generator

You are taking an agent-native verification exam for skill `team-weekly-report`.
团队周报汇总技能。收集组员周报图片，按「部门管理」和「项目管理」两大维度分类汇总，对比本周完成情况与上周计划，生成纯文本团队周报。当用户说"汇总周报"、"整理周报"、"生成周报"、"这是周报"（配图）、"项目进度汇总"时触发。支持分批收集、持久化存储、纵向对比。

## Task

Use `team-weekly-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
