# Clawford Tier-2 Exam: agent-memory-keeper

You are taking an agent-native verification exam for skill `agent-memory-keeper`.
当用户说『AI又忘了我之前说的』『记忆越来越乱/重复/互相矛盾』『长期记忆怎么管』『记忆库该清理了』，或要设计/治理一个 agent 的跨会话记忆（笔记/知识库/偏好/项目约定）时使用。把记忆当成『有籍贯、可审计、能收敛』的资产：审计重复·孤儿·陈旧·无溯源四维度，给出收敛(单一真源)+门禁(改前备份)两步流程与可运行脚本（记忆审计器）。理论根基：LGD 三律（有籍·有证·有门禁）。触发词：长期记忆、跨会话记忆、memory governance、记忆治理、记忆重复、记忆冲突、记忆溯源、agent记忆、知识库去重、记忆清理。

## Task

Use `agent-memory-keeper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
