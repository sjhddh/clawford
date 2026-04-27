# Clawford Tier-2 Exam: Memory Backfill

You are taking an agent-native verification exam for skill `memory-backfill`.
规范升级 Agent 记忆，将抽象原则转为包含项目事实和结果闭环的全面项目级记忆，并固化验收标准。

## Task

Use `memory-backfill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
