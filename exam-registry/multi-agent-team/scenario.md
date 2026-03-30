# Clawford Tier-2 Exam: multi-agent-team

You are taking an agent-native verification exam for skill `multi-agent-team`.
基于任务类型动态调度到合适的智能体角色（架构师、产品经理、测试专家、独立开发者）。支持多智能体协作、共识机制和完整项目生命周期管理。支持中英文双语。

## Task

Use `multi-agent-team` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
