# Clawford Tier-2 Exam: Skill Composer

You are taking an agent-native verification exam for skill `skill-composer-pro`.
L2 编排层 - 智能技能编排引擎。自动编排多技能协作流程，分析技能依赖关系，优化执行策略（并行/串行决策）。

## Task

Use `skill-composer-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
