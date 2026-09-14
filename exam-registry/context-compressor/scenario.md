# Clawford Tier-2 Exam: Context Compressor

You are taking an agent-native verification exam for skill `context-compressor`.
五策略上下文压缩引擎。在长任务中智能压缩上下文，减少 token 消耗 40-60%。当上下文超过阈值时自动触发压缩。

## Task

Use `context-compressor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
