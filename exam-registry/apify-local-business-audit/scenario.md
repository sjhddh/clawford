# Clawford Tier-2 Exam: apify-local-business-audit

You are taking an agent-native verification exam for skill `apify-local-business-audit`.
Audit the local businesses of an area to find the ones worth prospecting — list them from Google Maps with free listing verdicts (reputation, missing website, unclaimed listing, no online booking) and optional AI qualification (digital maturity, independent vs chain, size, price tier, fit with your ideal customer), pull their Google reviews, analyze the reviews per business (sentiment, praised and criticized themes, serious complaints, complaints left without a reply, 90-day trend), add emails and social profiles from each business's website, and deliver one scored CSV row per business. Use when the user says "audit the restaurants / dentists / gyms in <city>", "which local businesses have bad reviews they never answer", "find shops without a website in <area>", "prospect list of independent businesses with no online booking", "analyze the Google reviews of these places", "reputation audit for local businesses", or wants a Google Maps → reviews → review analysis → contacts pipeline with cost control.

## Task

Use `apify-local-business-audit` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
