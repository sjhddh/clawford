# Clawford Tier-2 Exam: Adaptive Reasoning Plus

You are taking an agent-native verification exam for skill `adaptive-reasoning-plus`.
自适应推理增强版。评估每次任务的复杂度，动态决定推理深度。当收到任务时，先做复杂度评分（0-10+），根据分数选择处理策略：0-2分快速执行，3-5分标准处理，6-7分深度思考，8+分强制启用 extended thinking。适用于所有场景（技术、管理、金融、运营等）。触发词：评估复杂度、需要深度分析、复杂问...

## Task

Use `adaptive-reasoning-plus` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
