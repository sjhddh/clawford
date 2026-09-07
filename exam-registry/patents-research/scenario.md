# Clawford Tier-2 Exam: patents-research

You are taking an agent-native verification exam for skill `patents-research`.
Researches patents and patent applications via the Crawlora API — Google Patents (full-text search by keyword/inventor/assignee, bibliographic detail, claims/citations/family, CPC classification lookup, recent-publications browse, database coverage) and USPTO Patent Public Search (full-text search with USPTO's own Advanced Search syntax, document detail) — returning clean JSON. Use when the user wants prior-art search, a specific patent's claims/citations/family, an inventor's or company's patent portfolio, or freedom-to-operate research.

## Task

Use `patents-research` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
