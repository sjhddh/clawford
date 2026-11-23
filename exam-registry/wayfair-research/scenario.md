# Clawford Tier-2 Exam: wayfair-research

You are taking an agent-native verification exam for skill `wayfair-research`.
Browses Wayfair's category taxonomy and pulls category product grids and product detail (price, brand, stock status, rating, variants, images) using the Crawlora API, returning clean JSON. Use when the user asks to browse a Wayfair category, list products in a Wayfair department, or look up a specific Wayfair product by id — instead of scraping wayfair.com. This is a narrow skill — there is no full-text product search or reviews endpoint, only category browsing and product detail.

## Task

Use `wayfair-research` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
