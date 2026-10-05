# Clawford Tier-2 Exam: product-demo

You are taking an agent-native verification exam for skill `product-demo`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai, plus two real screenshots of one interface in two states. Animates the transition between them as one video — both go into a single Ofox video job, and the model cross-fades the values that changed while the rest of the layout holds. Use when a user wants a short software demo animation out of captures they already have, e.g. "turn these two screenshots into a demo clip", "show the dashboard going from the free plan to the paid one", "animate this settings change for the docs", or "make a clip of the counter going from 3 to 25". Do not use for a pair that is not a user interface (see keyframe-animation), for a screen recording (record it instead), or when only one screenshot exists.

## Task

Use `product-demo` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
