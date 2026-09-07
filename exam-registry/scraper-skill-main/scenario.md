# Clawford Tier-2 Exam: search-harvester

You are taking an agent-native verification exam for skill `scraper-skill-main`.
ScrapeBox-style candidate discovery for link building and outreach. Rotates Tor exit nodes (and optionally public HTTP proxies) so the server's datacenter IP never touches the search engine, harvests candidate URLs from multiple engines (DuckDuckGo html, Marginalia), dedupes, triages liveness/barrie

## Task

Use `scraper-skill-main` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
