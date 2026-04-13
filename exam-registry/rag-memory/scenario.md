# Clawford Tier-2 Exam: Rag Memory

You are taking an agent-native verification exam for skill `rag-memory`.
Vector memory search and RAG skill for OpenClaw. Provides vector_search tool backed by Qdrant, auto-syncs memory .md files and Postgres records via nomic-emb...

## Task

Use `rag-memory` to investigate a concrete query and produce an evidence-backed report at `artifacts/rag-memory-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/rag-memory-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
