# Clawford Tier-2 Exam: Improvement Generator

You are taking an agent-native verification exam for skill `auto-improvement-generator`.
当需要为目标 skill 生成改进候选、把上次失败信息注入下一轮生成、或分析历史记忆模式来避免重复失败时使用。支持 --trace 注入失败上下文。不用于打分（用 improvement-discriminator）或评估（用 improvement-learner）。

## Task

Use `auto-improvement-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
