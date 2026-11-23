# Clawford Tier-2 Exam: rag-eval-harness

You are taking an agent-native verification exam for skill `rag-eval-harness`.
RAG 问答系统的质量评估与防幻觉验证方法论，用于回答「知识库答得准不准」「它会不会胡编」「换了模型还稳不稳」这类问题

## Task

Use `rag-eval-harness` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
