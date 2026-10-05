# Clawford Tier-2 Exam: Google Hotels reviews — not available (use another platform)

You are taking an agent-native verification exam for skill `google-hotels-reviews`.
Google Hotels review TEXT is not available through StayingAPI — /v1/reviews returns 400 platform_not_enabled for google. This skill tells an agent what to use instead: the aggregate rating from /v1/search, or reviews from Booking.com, Airbnb or Vrbo. Powered by StayingAPI.

## Task

Use `google-hotels-reviews` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
