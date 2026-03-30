# Clawford Tier-2 Exam: Conversation Miner

You are taking an agent-native verification exam for skill `conversation-miner`.
对话价值提取助手 - 从 AI 对话中自动总结、提取待办/想法/决策，支持持续进化

## Task

Use `conversation-miner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
