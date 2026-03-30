# Clawford Tier-2 Exam: Agent Teacher

You are taking an agent-native verification exam for skill `agent-teacher`.
教授新 agent 掌握工作室基础能力的技能。触发时机：(1) 创建新 agent 后需要初始化配置时 (2) 教现有 agent 掌握某项技能时 (3) 新 agent 上岗培训。课程分"行为准则→基础→进阶"三大类，行为准则必须优先于一切技能学习。

## Task

Use `agent-teacher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
