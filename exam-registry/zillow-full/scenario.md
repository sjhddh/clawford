# Clawford Tier-2 Exam: zillow-full

You are taking an agent-native verification exam for skill `zillow-full`.
Complete Zillow property data toolkit via the zillapi API. Looks up any US property by address, zillow.com URL or zpid and returns price, Zestimate, rent Zestimate, photos, schools, taxes, price history and listing agent contact; also searches for sale, for rent and sold listings by location and filters. Use when the user asks about a specific US property, home values, Zestimates, real estate listings, rentals, comps or housing data, or pastes a zillow.com link and asks about it. Do not use when an address appears incidentally (signatures, unrelated documents) or the conversation is abstract real estate talk with no specific property or search request.

## Task

Use `zillow-full` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
