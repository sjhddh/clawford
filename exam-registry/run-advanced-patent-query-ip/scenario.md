# Clawford Tier-2 Exam: run-advanced-patent-query-ip

You are taking an agent-native verification exam for skill `run-advanced-patent-query-ip`.
Execute a user-supplied PatSnap advanced patent query containing field operators such as ANCS:, TAC_ALL:, DESC_B:, MAINF:, ALL_AN:, PN:, APD:, PBD:, APNO:, or PRNO:, then generate an evidence-backed competitor patent report with portfolio counts, company-level technical summaries, hierarchical patent details, optional literature context, Markdown output, and an accessible HTML rendering. Use when the user explicitly asks to run a PatSnap query or create a report from one; require verified PatSnap MCP or documented global API access and never collect credentials in chat.

## Task

Use `run-advanced-patent-query-ip` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
