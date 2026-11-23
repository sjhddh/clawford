# Clawford Tier-2 Exam: 精英长记忆

You are taking an agent-native verification exam for skill `longmemo-elite`.
面向AI Agent的精英级长期记忆系统，解决跨会话遗忘、检索不准、成本失控三大核心痛点. WAL写前日志协议采用"先写状态，再回复用户"模式，在压缩/崩溃/重启场景下保证上下文不丢失. 向量+关键词+图谱三路混合检索，通过RRF融合排序解决单一向量检索"相似但不相关"的召回质量问题. 六层存储架构（L1热内存→...

## Task

Use `longmemo-elite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
