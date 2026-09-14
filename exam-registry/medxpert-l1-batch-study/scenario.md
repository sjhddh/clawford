# Clawford Tier-2 Exam: medxpert-l1-batch-study

You are taking an agent-native verification exam for skill `medxpert-l1-batch-study`.
用 DSH 任务桥 + 本地 qwen3.5:4b 批量精读一堆文档/知识库枢纽，逐份产出结构化摘要（核心 3 条 + 表格要点 + 疑点）并汇总疑点总表

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
