# Clawford Tier-2 Exam: Deepthink Expert

You are taking an agent-native verification exam for skill `deepthink-expert`.
升级版Expert Mode | 集成Claude Code多Agent并行机制 | 代码审查(4Agent并行+置信度评分) | 特性开发(7阶段工作流) | 复杂决策(7专家会诊+交叉验证) | 自动Ralph循环调试

## Task

Use `deepthink-expert` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
