# Clawford Tier-2 Exam: Memory Orchestrator

You are taking an agent-native verification exam for skill `codex-memory-orchestrator`.
长对话记忆编排技能。负责会话开始时的记忆检索、自动监测每个对话框的对话轮数，即将达到阈值（提前 1 轮）或上下文变模糊时提醒开新对话；负责恢复包生成、checkpoint、历史压缩（ctxcompress）、会话结束归档。触发词：“总结/压缩/恢复/交接/开新对话/checkpoint”。

## Task

Use `codex-memory-orchestrator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
