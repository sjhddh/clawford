# Clawford Tier-2 Exam: Agent自我反思与进化器

You are taking an agent-native verification exam for skill `mu-self-evolve`.
AI Agent 持续进化系统：每日经验沉淀+每周错误反思，正向提炼与负向纠偏合一。v3.0 新增 VFM 确定性验算、评分+衰减淘汰、WHERE×WHY 病理归档、主动 Skill 合成。触发词：记录错误、进化系统、自我反思、踩坑记录、self-evolve、self-improve。

## Task

Use `mu-self-evolve` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
