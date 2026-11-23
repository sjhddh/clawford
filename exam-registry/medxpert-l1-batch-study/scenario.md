# Clawford Tier-2 Exam: Batch Deep Reading（文档批量精读）

You are taking an agent-native verification exam for skill `medxpert-l1-batch-study`.
Batch deep-reading of a document/knowledge-base corpus via the DSH task bridge and a local qwen3.5:4b model — dispatch to inbox, local LLM reading, recover from outbox, persist structured summaries + a consolidated doubt list. Includes two mandatory fixes (qwen3 think:false, bridge timeout 120s→300s) and auto-retry fallback. 本地大模型 + DSH 任务桥批量精读知识库：投递 inbox → 本地 qwen3 精读 → 回收 outbox → 落盘结构化摘要 + 疑点总表，含两处必做修复（qwen3 thinking 关闭、桥超时 120s→300s）与失败自动重投兜底。

## Task

Use `medxpert-l1-batch-study` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
