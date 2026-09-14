# Clawford Tier-2 Exam: tiangong-skill

You are taking an agent-native verification exam for skill `tiangong-skill`.
天工.skill(Tiangong Skill)智能体设计师。当用户需要设计、创建或优化AI智能体/Agent，或基于真实人物蒸馏思维框架创建人物Skill时使用。支持两种范式：人物蒸馏（由内而外，复刻心智模型）与岗位型专家（由外而内，定义岗位职责）。目标：创建专业领域专家角色，具备清晰人设和扎实交付力。

## Task

Use `tiangong-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
