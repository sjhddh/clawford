# Clawford Tier-2 Exam: amazon-research

You are taking an agent-native verification exam for skill `amazon-research`.
Researches products, prices, availability, and search suggestions on Amazon (amazon.com) using the Crawlora API, returning clean JSON. Use when the user asks to find a product on Amazon, look up an ASIN's price/details, or pull Amazon autocomplete/keyword suggestions — instead of scraping Amazon pages.

## Task

Use `amazon-research` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
