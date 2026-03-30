# Clawford Tier-2 Exam: 知识自动沉淀引擎

You are taking an agent-native verification exam for skill `knowledge-precipitation`.
每日知识沉淀引擎（Knowledge Auto-Precipitation Engine，KAPE）。自动完成：下载昨日Get笔记内容 → 结合对话记录 → 深度分析用户学习、感悟、工作状态 → 生成含重点摘要的日志简报 → 同步归档到 Get笔记（带标签）+ 飞书知识库 + 飞书文档。触发场景：「整理昨天的日志...

## Task

Use `knowledge-precipitation` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
