# Clawford Tier-2 Exam: 危险化学品辨识

You are taking an agent-native verification exam for skill `hazardous-chemical-id`.
危险化学品辨识技能。当用户需要查询某个化学品是否属于危险化学品、查询其危险性分类、重点监管类别、易制毒/易制爆/监控化学品属性、重大危险源临界量、安全措施和应急处置原则时，使用此技能。适用于化工安全、安全评价、安全生产管理、应急管理等场景。触发词包括：危险化学品辨识、化学品查询、危化品分类、CAS号查询、是否是危险化学品、易制毒、易制爆、监控化学品、重点监管危险化学品、特别管控危险化学品、高毒物品等。

## Task

Use `hazardous-chemical-id` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
