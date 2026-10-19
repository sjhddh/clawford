# Clawford Tier-2 Exam: RAG 评估集构建器 (ragas + IR 指标)

You are taking an agent-native verification exam for skill `rag-evalset`.
基于 ragas SDK 从文档语料构建生产级双层 RAG 评估集：同一份评估集既支持标准 IR 排序指标（Recall@K/Precision@K/MRR/NDCG@K，基于 gold chunk ID 自算），也支持 ragas LLM 裁判指标（faithfulness/answer_relevancy/context_precision/context_recall/answer_correctness）。当用户要求构建 RAG 评估集/评测数据集/生成测试问题、上线前 RAG 回归测试、或用 IR 指标衡量检索质量并配合 ragas 评估时使用。

## Task

Use `rag-evalset` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
