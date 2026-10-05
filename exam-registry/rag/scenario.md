# Clawford Tier-2 Exam: RAG

You are taking an agent-native verification exam for skill `rag`.
Designs, tunes, and debugs retrieval-augmented generation (RAG) pipelines: chunking, embeddings, hybrid retrieval, reranking, and grounded answers. Use when a system returns the wrong passages, misses a document that is indexed, cites nothing, or hallucinates over good context; when choosing a vector store, an embedding model, a chunk size, or a reranker; when similarity scores collapse after a model swap; when a metadata filter empties the result set; when answers ignore mid-context facts; when follow-up questions retrieve the wrong thing; when indexing PDFs, scanned pages, tables, code, or transcripts; when GDPR erasure, tenant isolation, or prompt injection from indexed documents is the problem; or when per-query cost or p95 latency has to come down. Covers reindex migrations, corpus freshness, evaluation sets, and agentic and graph retrieval. Not for splitter internals (`rag-chunking`), scoring rubrics (`rag-evaluation`), or LangChain APIs (`langchain`).

## Task

Use `rag` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
