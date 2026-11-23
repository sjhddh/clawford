# Clawford Tier-2 Exam: autopilot-loop

You are taking an agent-native verification exam for skill `autopilot-loop`.
Runs any goal as a weekly loop - plan the week, do the daily work, queue anything public for approval, and turn every "not good" into a rule it follows next time. Never posts, sends, or spends without the owner's OK on that exact item. Use when the user wants a project to keep moving with little back and forth, or says "autopilot setup", "plan the week", "daily run", or "evening review". NOT for one-off tasks or work with no owner to approve it.

## Task

Use `autopilot-loop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
