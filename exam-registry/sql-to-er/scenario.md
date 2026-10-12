# Clawford Tier-2 Exam: sql-to-er

You are taking an agent-native verification exam for skill `sql-to-er`.
Generate classic Chen-style ER diagrams from SQL DDL, pasted CREATE TABLE, or natural-language data model requests. Trigger on ER/ERD/entity-relationship/schema diagram/SQL转ER图, or when user asks to design tables and draw an ER diagram. Outputs only what the user asked for (Chen PNG by default; Mermaid/Word/GoJS only on request). SQL parse via yanleaf.com API with local fallback.

## Task

Use `sql-to-er` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
