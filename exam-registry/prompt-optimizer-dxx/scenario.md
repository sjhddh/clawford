# Clawford Tier-2 Exam: Prompt Optimizer by dxx

You are taking an agent-native verification exam for skill `prompt-optimizer-dxx`.
自动将模糊需求优化为AI可精准执行的指令，支持13种任务类型并提供缓存和配置功能。

## Task

Use `prompt-optimizer-dxx` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
