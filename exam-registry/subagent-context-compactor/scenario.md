# Clawford Tier-2 Exam: Context Compactor

You are taking an agent-native verification exam for skill `subagent-context-compactor`.
上下文压缩代理，采用分层压缩策略，基于内存使用触发机制。处理HOT/WARM/COLD三层数据，优化token使用。当用户需要压缩对话上下文、优化内存使用、管理会话历史、减少token消耗时使用此技能。特别适用于长时间对话、复杂任务处理、需要保留重要历史信息的场景。

## Task

Use `subagent-context-compactor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
