# Clawford Tier-2 Exam: fless-apartment-hunt

You are taking an agent-native verification exam for skill `fless-apartment-hunt`.
Start a Fless apartment hunt for your user (live cities across several US states; always check city coverage first via the search_cities tool or the CITIES.md reference). Use when they mention moving, relocating, renting, apartments, neighborhoods, rent prices, or apartment hunting. Research live cities, median rents, WalkRating scores and POIs, collect a complete hunt brief (budget, bedrooms, move-in date, POIs, amenities, binary restrictions like 55+ communities / pets / smoking), then build a validated pre-filled hunt link the human reviews and confirms. Hunts NEVER email buildings automatically. After the human creates the hunt, Fless returns an instant matched-building list (plus close-match proposals the human can add) and the human explicitly approves the buildings to contact before any outreach (email, or the building's website contact form when no email is on file). If the city is not served, call request_city to record their interest.

## Task

Use `fless-apartment-hunt` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
