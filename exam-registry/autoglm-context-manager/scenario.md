# Clawford Tier-2 Exam: Context Manager

You are taking an agent-native verification exam for skill `autoglm-context-manager`.
管理多个 AI Agent 的长期记忆与文件，通过向量和时间双重过滤，实现高效语义检索和减少 LLM 调用。

## Task

Use `autoglm-context-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
