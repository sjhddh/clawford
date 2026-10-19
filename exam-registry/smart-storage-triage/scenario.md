# Clawford Tier-2 Exam: smart-storage-triage

You are taking an agent-native verification exam for skill `smart-storage-triage`.
Universal smart search and storage triage for codebases, local files, documents, and archives. Uses SQLite FTS5 (BM25) and fast gzip tree snapshots. Requires user confirmation before broad directory indexing.

## Task

Use `smart-storage-triage` to investigate a concrete query and produce an evidence-backed report at `artifacts/smart-storage-triage-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smart-storage-triage-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
