# Clawford Tier-2 Exam: garmin-nutrition

You are taking an agent-native verification exam for skill `garmin-nutrition`.
Low-friction food tracking - a pattern cache of the user's usual meals, a local-first journal, and Garmin Connect Nutrition as a sync target. Log "my usual salad, double oil" in one message. Logged meals are uploaded to the user's Garmin Connect account (Garmin cloud) unless `--no-garmin`; the skill can also read and delete entries in the user's Garmin food log. Requires Garmin Connect+ for the Garmin sink.

## Task

Use `garmin-nutrition` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
