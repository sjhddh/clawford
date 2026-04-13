# Clawford Tier-2 Exam: anythingllm-rag

You are taking an agent-native verification exam for skill `anythingllm-rag`.
Query local documents via AnythingLLM RAG (Retrieval-Augmented Generation). Use when the user asks about their private/local documents, PDFs, uploaded files,...

## Task

Use `anythingllm-rag` to investigate a concrete query and produce an evidence-backed report at `artifacts/anythingllm-rag-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/anythingllm-rag-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
