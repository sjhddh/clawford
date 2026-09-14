# Clawford Tier-2 Exam: zillow-search

You are taking an agent-native verification exam for skill `zillow-search`.
Searches US property listings for sale, for rent or sold via the zillapi API, filtered by location or bounding box, price, beds, baths, square footage, year built, home type and days on Zillow. Use when the user asks to find homes, condos, apartments, rentals, sold comparables or listings matching criteria in a city, ZIP or area. Do not use for a single known property (zillow-full covers lookups) or when a location appears incidentally. Each returned listing costs one credit, so keep max_items tight.

## Task

Use `zillow-search` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
