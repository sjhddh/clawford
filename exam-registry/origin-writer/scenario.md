# Clawford Tier-2 Exam: origin-writer

You are taking an agent-native verification exam for skill `origin-writer`.
百万字小说写作引擎——把长篇写作变成事务性写作。AI 每写一章提交一个语义事务（正文+状态变更），门禁逐条复核（禁区/伏笔状态机/正文对照）后才落盘。角色不会突然用上他不知道的信息，物品不会凭空易主，伏笔不会收了又埋。新会话秒恢复：state 一条命令拿到全部世界状态。当需要写长篇小说、续写长篇、维护小说世界观一致性、管理伏笔/人物状态/时间线时使用。

## Task

Use `origin-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
