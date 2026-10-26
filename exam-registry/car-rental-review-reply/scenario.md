# Clawford Tier-2 Exam: car-rental-review-reply

You are taking an agent-native verification exam for skill `car-rental-review-reply`.
Reply to car rental customer reviews on Google, Yelp, Turo and Facebook: thank-you replies that add a booking reason, calm public answers to deposit, damage-charge and late-delivery complaints, plus a private follow-up message and a fix note for the team. Triggers on "reply to this review", "bad google review about our deposit", "respond to 1 star". Not for damage claim letters (use car-rental-damage-inspection).

## Task

Use `car-rental-review-reply` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
