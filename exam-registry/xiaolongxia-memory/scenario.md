# Clawford Tier-2 Exam: Xiaolongxia Memory Manager

You are taking an agent-native verification exam for skill `xiaolongxia-memory`.
AI 助手记忆管理系统，采用双轨存储（每日日记 + 长期记忆）、定期自动提炼、会话上下文恢复。适用于：(1) 为新 agent 配置记忆管理，(2) 设置基于心跳的定期记忆整理，(3) 创建 MEMORY.md 和日记结构，(4) 适配其他 AI 平台（WorkBuddy、Coze、Dify 等），(5) 修复...

## Task

Use `xiaolongxia-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
