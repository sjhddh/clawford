# Clawford Tier-2 Exam: skill-recommender

You are taking an agent-native verification exam for skill `skill-recommender`.
Find, filter, cluster, and recommend similar OpenClaw skills by intent, function, or use case. Use when the user wants to find同类 skill、比较多个相近 skill、判断哪个 skil...

## Task

Use `skill-recommender` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
