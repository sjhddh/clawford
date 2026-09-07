# Clawford Tier-2 Exam: Agent Isolation

You are taking an agent-native verification exam for skill `agent-isolation`.
当多个 AI agent 共享同一个运行时底座时，防止互相踩踏工作区。不是靠约定——是写进每个 agent 配置文件里的硬边界规则。每个 agent 有自己的工作区、自己的 memory、自己的 session；唯一共享区是显式声明的公共目录。包含隔离规则模板、越界例外条款、从混乱到隔离的逐步执行指南。

## Task

Use `agent-isolation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
