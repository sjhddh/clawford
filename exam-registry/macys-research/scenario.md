# Clawford Tier-2 Exam: macys-research

You are taking an agent-native verification exam for skill `macys-research`.
Looks up a Macy's product's full detail and customer reviews by its numeric productId, and pulls Macy's own search-box (typeahead) suggestions, using the Crawlora API, returning clean JSON. Use when the user has (or can get) a Macy's product page ?ID= value and wants its price/description/variants/reviews, or wants Macy's autocomplete suggestions for a query — instead of scraping macys.com. There is no full-text product search or category browse — a known numeric productId is required as the entry point.

## Task

Use `macys-research` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
