# Clawford Tier-2 Exam: ClawBrain Benchmark

You are taking an agent-native verification exam for skill `clawbrain-pro-benchmark`.
测试你的 OpenClaw 在 205 个真实场景下的表现，对比 ClawBrain v1.0 编排引擎的提升效果

## Task

Use `clawbrain-pro-benchmark` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
