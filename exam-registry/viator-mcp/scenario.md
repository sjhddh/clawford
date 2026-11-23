# Clawford Tier-2 Exam: viator-mcp

You are taking an agent-native verification exam for skill `viator-mcp`.
Search Viator tours, activities and experiences via MCP. Use when the user asks to find tours, activities, excursions, day trips, tickets, or "things to do" in a city or destination, get details/pricing/availability for a Viator product, list attractions in a destination, or convert supplier-currency prices. Triggers on phrases like "things to do in Rome", "find a food tour in Paris", "is this tour available in September", "Viator", "book an excursion" (search only — no booking), or "skip-the-line Colosseum tickets". Requires the @chrischall/viator-mcp package installed and the viator server registered (see Setup), plus a Viator Partner API key (free Basic Access affiliate tier).

## Task

Use `viator-mcp` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
