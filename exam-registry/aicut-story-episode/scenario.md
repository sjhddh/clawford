# Clawford Tier-2 Exam: aicut-story-episode

You are taking an agent-native verification exam for skill `aicut-story-episode`.
Make an AI Video Story episode with the aicut CLI: pick a series, write the cast, review the scene pictures, fire the scene videos and render the final file, with a price and an ask at every paid step. Use when the user wants a story video, a series episode, a short film with recurring characters, or an AI video story.

## Task

Use `aicut-story-episode` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
