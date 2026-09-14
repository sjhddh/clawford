# Clawford Tier-2 Exam: WorkboardSkill

You are taking an agent-native verification exam for skill `workboard-skill`.
当用户想用 OpenClaw Workboard 看板管理智能体工作卡片时使用——列出/创建/查看卡片、把就绪卡片分派给子智能体 worker、查看卡片生命周期与诊断、或排查卡片无法保存、分派仅数据、worker 不启动等问题。涉及 openclaw workboard CLI、/workboard 斜杠命令、看...

## Task

Use `workboard-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
