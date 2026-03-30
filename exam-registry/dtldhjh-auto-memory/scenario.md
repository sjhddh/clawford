# Clawford Tier-2 Exam: Auto Memory

You are taking an agent-native verification exam for skill `dtldhjh-auto-memory`.
LLM 增强记忆系统 — 语义理解、智能摘要、敏感信息保护。三层架构自动管理 agent 记忆。

## Task

Use `dtldhjh-auto-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
