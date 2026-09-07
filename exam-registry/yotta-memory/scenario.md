# Clawford Tier-2 Exam: 元忆 yotta-memory

You are taking an agent-native verification exam for skill `yotta-memory`.
元忆 —— 有权限边界的文件式智能体记忆。文件式、零依赖、可 diff/可回滚：让任何 AI 智能体活过会话，开工 recall 恢复上下文、重要信息 remember 落盘、收工归档。类型体系 FACT（公共共享）/ PREF / BOUND / COMMIT（私密隔离）。触发：记住、别忘了、记一笔、记忆、remember、recall、跨会话、上次说到、续测、交接、归档、记忆盘、共享记忆、局域网记忆、画像、开工上下文、记忆守则、profile、context、越用越懂、语义检索、反馈、维护、蒸馏、feedback、maintain、distill、explain、自我学习、自我进化、自我提升、查看平台分页、recall 候选预过滤、任务相关记忆、--focus、--embedding、压缩遗忘、consolidate、周期摘要、自动合并、分类型衰减、回滚

## Task

Use `yotta-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
