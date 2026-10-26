# Clawford Tier-2 Exam: black-friday-deal-detector

You are taking an agent-native verification exam for skill `black-friday-deal-detector`.
Use when evaluating any sale, Black Friday doorbuster, or 'was $X now $Y' claim: detects fake-MSRP anchoring, pre-sale price inflation, coupon-stacking theater, and % off a price nobody paid. Scores the deal against 12-month category price bands and historical-low baselines, with verdicts WAIT / OK DEAL / GREAT / PRICE THEATER.

## Task

Use `black-friday-deal-detector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
