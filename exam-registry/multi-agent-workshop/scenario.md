# Clawford Tier-2 Exam: 多agent协同执行

You are taking an agent-native verification exam for skill `multi-agent-workshop`.
七阶段（含阶段0任务澄清）多角色工作坊；角色种类与人数均由任务决定。触发词："多角色研讨"、"需求工作坊"、"需求评审"、"圆桌"、"定方案再执行"。

## Task

Use `multi-agent-workshop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
