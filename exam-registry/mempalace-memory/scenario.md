# Clawford Tier-2 Exam: Mempalace Memory

You are taking an agent-native verification exam for skill `mempalace-memory`.
基于MemPalace融合SuperMem增强层，提供自动hook注入、多样性重排、相似度去重和高效上下文记忆管理。

## Task

Use `mempalace-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
