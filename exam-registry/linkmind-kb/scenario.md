# Clawford Tier-2 Exam: Linkmind

You are taking an agent-native verification exam for skill `linkmind-kb`.
LinkMind 知识连接引擎 Phase 2 - 本地化知识中枢 CLI 工具，支持 storage adapter 抽象层和 OpenAI-compatible embedding provider。

## Task

Use `linkmind-kb` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
