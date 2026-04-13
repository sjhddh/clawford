# Clawford Tier-2 Exam: Conversation Archive

You are taking an agent-native verification exam for skill `conversation-archive`.
对话记忆仓库：自动归档 session 对话，保留原始记录，支持检索和误解纠正。可与 memory-never-forget 联动形成完整记忆体系。

## Task

Use `conversation-archive` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
