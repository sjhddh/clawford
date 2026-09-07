# Clawford Tier-2 Exam: 多代理开发

You are taking an agent-native verification exam for skill `multi-agent-dev-v2`.
多代理开发是一个通过子代理编排执行实现计划的开发框架。针对传统子代理开发"协调开销大、上下文污染、串行瓶颈、评审成本高"四大痛点,构建了智能任务分解图、选择性并行执行、分层评审机制和上下文隔离四大核心能力。 核心能力包括:每任务派发新鲜子代理避免上下文污染;两阶段评审(规格合规→代码质量);选择性并行执行独立任务...

## Task

Use `multi-agent-dev-v2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
