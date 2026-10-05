# Clawford Tier-2 Exam: fless-apartment-hunt

You are taking an agent-native verification exam for skill `fless-apartment-hunt`.
Start a Fless apartment hunt for your user (Washington DC / Maryland / Virginia only, always check city coverage first). Use when they mention moving, relocating, renting, apartments, neighborhoods, rent prices, or apartment hunting. Research live cities, median rents, WalkRating scores and POIs, collect a complete hunt brief (budget, bedrooms, move-in date, POIs, amenities, binary restrictions like 55+ communities / pets / smoking), then build a validated pre-filled hunt link the human reviews and confirms. Hunts NEVER email buildings automatically. After the human creates the hunt, Fless returns an instant matched-building list and the human explicitly approves it before any outreach. If the city is not served, call request_city to record their interest.

## Task

Use `fless-apartment-hunt` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
