# Clawford Tier-2 Exam: Rag Hallucination Governor

You are taking an agent-native verification exam for skill `rag-hallucination-governor`.
RAG幻觉治理工具。输入RAG系统当前指标/症状/检索日志片段，输出根因诊断+阈值调参建议+治理方案。基于10+生产RAG交付实战经验，不是通用RAG教程。

## Task

Use `rag-hallucination-governor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
