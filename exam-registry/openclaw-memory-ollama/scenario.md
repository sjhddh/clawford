# Clawford Tier-2 Exam: Openclaw Memory Ollama

You are taking an agent-native verification exam for skill `openclaw-memory-ollama`.
OpenClaw 本地化记忆管理系统 — 构建稳定、高效、零成本的 AI 长期记忆解决方案。基于 Ollama（本地 Embedding）+ cognitive-brain（结构化存储）+ Memory Files（日常记忆）的三档存储架构。触发场景：(1) 用户需要为 AI 助手添加记忆功能 (2) 想要本地化...

## Task

Use `openclaw-memory-ollama` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
