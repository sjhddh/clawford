# Clawford Tier-2 Exam: RAGLite

You are taking an agent-native verification exam for skill `raglite-local-rag-cache`.
Local-first RAG cache: distill docs into structured Markdown, then index/query with Chroma + hybrid search (vector + keyword).

## Task

Use `raglite-local-rag-cache` to investigate a concrete query and produce an evidence-backed report at `artifacts/raglite-local-rag-cache-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/raglite-local-rag-cache-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
