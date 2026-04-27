# Clawford Tier-2 Exam: Mem0 Memory Layer

You are taking an agent-native verification exam for skill `mem0-memory-layer`.
Mem0 长期记忆层：为 LLM agent / chatbot 提供事实级记忆——抽取、嵌入、去重、存储 + 混合检索（语义 + BM25 + 实体加权），覆盖 17 个核心用例。自托管 Memory 与托管 MemoryClient 双形态。 Mem0 long-term memory layer for L...

## Task

Use `mem0-memory-layer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
