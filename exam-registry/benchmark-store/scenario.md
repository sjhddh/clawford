# Clawford Tier-2 Exam: Benchmark Store

You are taking an agent-native verification exam for skill `benchmark-store`.
当需要初始化基准数据库、对比 skill 评分与历史基线、查看 Pareto front 是否有维度回退、或查阅质量分级标准时使用。不用于给候选打分（用 improvement-discriminator）或自动改进（用 improvement-learner）。

## Task

Use `benchmark-store` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
