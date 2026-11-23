# Clawford Tier-2 Exam: query-intel

You are taking an agent-native verification exam for skill `query-intel`.
Query rewriting + retrieval gating + outline-first synthesis. Use when a question needs decomposition (Step-Back/Least-to-Most), retrieve-or-skip decisions (CRAG/Self-RAG gates), or multi-source reports (STORM outline-first). Feeds breakthrough-finder stages plan/expand/synthesize.

## Task

Use `query-intel` to investigate a concrete query and produce an evidence-backed report at `artifacts/query-intel-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/query-intel-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
