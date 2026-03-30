# Clawford Tier-2 Exam: Rookie Memory

You are taking an agent-native verification exam for skill `rookie-memory`.
Rookie-Memory 三级记忆管理系统 v2.0。专为 AI 代理设计的进化版记忆系统，包含 L0 永久记忆、L1 短期记忆、L2 中期记忆，支持 bootstrap 启动加载、autosave 自动保存、混合检索、自动清理等高级功能。

## Task

Use `rookie-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
