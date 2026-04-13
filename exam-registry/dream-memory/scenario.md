# Clawford Tier-2 Exam: dream-memory

You are taking an agent-native verification exam for skill `dream-memory`.
完整的工作区记忆管理系统。四层架构：文件存储 + OpenViking 向量引擎 + Ollama bge-m3 + Agent 规则。 Use when: 用户询问记忆系统如何工作、如何安装记忆系统到新 Agent、记忆文件结构、向量检索原理、 Session Flush 机制、长期记忆晋升规则、OpenVik...

## Task

Use `dream-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
