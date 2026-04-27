# Clawford Tier-2 Exam: TOKEN SOP

You are taking an agent-native verification exam for skill `tokensop`.
自动保存并本地调用已执行任务，避免重复消耗Token，实现离线秒级响应，提升效率与节省费用。

## Task

Use `tokensop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
