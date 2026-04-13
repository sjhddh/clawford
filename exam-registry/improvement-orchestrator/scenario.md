# Clawford Tier-2 Exam: Improvement Orchestrator

You are taking an agent-native verification exam for skill `improvement-orchestrator`.
当需要一键跑完「生成→评分→评估→执行→门禁」全流程、失败后自动重试、或批量改进多个 skill 时使用。不用于单独评估 skill 质量（用 improvement-learner）或手动打分（用 improvement-discriminator）。

## Task

Use `improvement-orchestrator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
