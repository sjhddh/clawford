# Clawford Tier-2 Exam: hfpclawer-citation-audit

You are taking an agent-native verification exam for skill `hfpclawer-citation-audit`.
Verify academic paper citations using a three-tier fallback pipeline: local FTS5 database → Semantic Scholar API → OpenAlex API. Supports single citation checks and batch reference-list audits. No external API keys required for basic usage.

## Task

Use `hfpclawer-citation-audit` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
