# Clawford Tier-2 Exam: errand-ai

You are taking an agent-native verification exam for skill `errand-ai`.
Send a real person to a physical place in Seoul (Gangnam area) to check, photograph, verify, queue, or pick something up, and get GPS+photo evidence back. Use when the user needs eyes or hands on site — "is this store open?", "how long is the line?", "take a photo of the menu", "is the product on the shelf?".

## Task

Use `errand-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
