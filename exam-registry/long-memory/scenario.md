# Clawford Tier-2 Exam: Long Memory

You are taking an agent-native verification exam for skill `long-memory`.
全量对话记忆系统，自动保存每次对话的完整内容（用户消息、助手回复、思考过程）并支持按语义检索任意历史对话。当用户提到"记下来""别忘了""回忆一下""之前聊过""什么时候说的"、要求回顾历史对话、或需要跨 session 记忆连续性时触发。也适用于 session 结束时的自动记忆归档。不适用于简单的短期记事（用...

## Task

Use `long-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
