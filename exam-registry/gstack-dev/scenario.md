# Clawford Tier-2 Exam: Gstack AI虚拟工程团队

You are taking an agent-native verification exam for skill `gstack-dev`.
Gstack式AI工程团队开发模式。基于Y Combinator CEO Garry Tan开源的gstack方法论， 将单一AI助手转化为虚拟工程团队。适用场景：新项目启动、功能开发、代码重构、Bug修复、 技术方案评审、部署上线、团队Sprint规划、代码审查、E2E测试。 触发词：gstack、用gstac...

## Task

Use `gstack-dev` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
