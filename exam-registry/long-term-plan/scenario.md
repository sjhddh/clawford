# Clawford Tier-2 Exam: 长期计划推进

You are taking an agent-native verification exam for skill `long-term-plan`.
长期计划推进技能。用于管理需要持续数天/数周的任务，采用滚动节点式规划（每3-5天为一个阶段，阶段结束时复盘并规划下一阶段）。避免记忆膨胀，保持计划可执行。当用户提到"长期任务"、"持续计划"、"节点推进"、"阶段规划"时使用。

## Task

Use `long-term-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
