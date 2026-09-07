# Clawford Tier-2 Exam: continuous-test-review-loop

You are taking an agent-native verification exam for skill `continuous-test-review-loop`.
把「不断测试 → 复盘 → 改进 → 复测」做成常态化机制，用于回答「方案上线后怎么持续验证」「怎么让团队养成复盘节奏」这类问题

## Task

Use `continuous-test-review-loop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
