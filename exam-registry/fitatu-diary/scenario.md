# Clawford Tier-2 Exam: fitatu-diary

You are taking an agent-native verification exam for skill `fitatu-diary`.
Keep the user's Fitatu food diary (Polish calorie counter, licznik kalorii) through the fitatu-mcp tools - read a day, check calories and macros left against goals, log meals by name, barcode or as a custom item, fix or remove entries, log weight, water, body measurements and workouts, set calorie and macro goals, and give weekly reports. Use when the user mentions Fitatu, what they ate, calories or macros left, logging food or a meal (posiłek, kalorie, dziennik), their weight, water or calorie goal, or a diet report.

## Task

Use `fitatu-diary` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
