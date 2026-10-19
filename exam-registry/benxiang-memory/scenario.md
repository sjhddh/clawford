# Clawford Tier-2 Exam: benxiang-memory

You are taking an agent-native verification exam for skill `benxiang-memory`.
Shadow Memory —— 把聊天历史持续提交为世界状态，新会话秒恢复。MCP Server（stdio，零依赖）：项目状态持久化在 .origin 包里，AI 不再「记住」什么，开工前 origin_state 取投影，收工时 origin_commit 提交语义事务。事务过确定性门禁才落盘，状态不会因模型记错而腐坏；每个字段都能回答「凭什么是这个值」。当新会话丢失上下文、多 agent 协作状态漂移、项目进度需要持久化与追责时使用。

## Task

Use `benxiang-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
