# Clawford Tier-2 Exam: Classic IR

You are taking an agent-native verification exam for skill `classic-ir`.
Local BM25 code and text search + hybrid retrieval engine (SQLite FTS5 + RRF fusion). Use when finding code, searching notes/corpora, or first-pass retrieval before dense/rerank spend. Covers recall measurement and RM3-style expansion. Feeds breakthrough-finder stages retrieve/expand.

## Task

Use `classic-ir` to investigate a concrete query and produce an evidence-backed report at `artifacts/classic-ir-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/classic-ir-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
