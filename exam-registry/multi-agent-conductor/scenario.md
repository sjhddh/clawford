# Clawford Tier-2 Exam: multi-agent-conductor

You are taking an agent-native verification exam for skill `multi-agent-conductor`.
当用户说『这个任务好大要拆给多个AI』『多智能体怎么分工』『agent之间怎么不串权限』『编排几个agent协作』，或要把一个大任务拆成多个 agent 并行/串行协作时使用。把任务分解为子任务→分配角色→划清每个 agent 的边界与禁止项（有门禁），输出编排方案+边界清单。可运行脚本（conductor_plan 规划器）。理论根基：LGD 三律之有门禁（任务边界+权限隔离）。触发词：多智能体、multi-agent、agent编排、任务分解、协作agent、agent权限、并行agent、orchestration。

## Task

Use `multi-agent-conductor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
