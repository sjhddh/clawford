# Clawford Tier-2 Exam: arxivkb

You are taking an agent-native verification exam for skill `arxivkb`.
Local arXiv paper manager with semantic search. Crawls arXiv categories, downloads PDFs, chunks content, and indexes with FAISS + Ollama embeddings. No cloud...

## Task

Use `arxivkb` to investigate a concrete query and produce an evidence-backed report at `artifacts/arxivkb-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/arxivkb-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
