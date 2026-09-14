# Clawford Tier-2 Exam: food-recall-radar

You are taking an agent-native verification exam for skill `food-recall-radar`.
Use when you want to check whether food you actually bought is affected by an active recall, after hearing news of an outbreak or a brand recall, when organizing the pantry, after a grocery run, or on a schedule (weekly recall audit) — builds a personal pantry inventory of brands/products/UPCs, queries openFDA's live food-enforcement recall database, fuzzy-matches your items against ongoing Class I/II/III recalls with lot-code pattern extraction, and outputs a risk-ranked action list (check / discard / return-for-refund).

## Task

Use `food-recall-radar` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
