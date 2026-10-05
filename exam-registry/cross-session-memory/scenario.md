# Clawford Tier-2 Exam: cross-session-memory

You are taking an agent-native verification exam for skill `cross-session-memory`.
给 AI agent/bot 做跨会话持久记忆的分层混合方案。当用户要"给 bot 加记忆""让 agent 记住之前的事""跨会话上下文持久化""记忆去重/断链/陈旧检查"，或要搭一个有长期记忆的 agent 时使用。方案=markdown 真理源(人可读可手改) + SQLite 派生索引(选择性召回) + 生命周期检查(断链/重复/陈旧)，纯标准库零依赖。

## Task

Use `cross-session-memory` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
