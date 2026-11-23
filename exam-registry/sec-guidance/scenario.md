# Clawford Tier-2 Exam: sec-guidance

You are taking an agent-native verification exam for skill `sec-guidance`.
Extract management guidance from SEC filings (10-K/10-Q, and 20-F/40-F/6-K for foreign private issuers) with verifiable inline citations and an honest recall check — and detect guidance REVISIONS (--diff) by comparing consecutive earnings 8-Ks and emitting graded events (raised/lowered/narrowed/dropped, with magnitude, horizon, and verbatim quotes). Self-contained (EDGAR + pure-Python BM25 + Claude/OpenAI or local claude CLI). Optional heavy mode delegates to a local RAG pipeline.

## Task

Use `sec-guidance` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
