# Clawford Tier-2 Exam: 技能优化器

You are taking an agent-native verification exam for skill `skill-optimizer-guipi`.
专门负责修改和优化已有技能。当发现技能有漏洞/流程缺失/逻辑错误/经验教训需要沉淀时触发。触发词：优化技能、修改技能、技能有问题、技能漏洞、改进技能、技能踩坑、把这个经验写进技能、技能加一条规则。

## Task

Use `skill-optimizer-guipi` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
