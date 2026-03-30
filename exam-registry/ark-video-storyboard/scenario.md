# Clawford Tier-2 Exam: ark-video-storyboard

You are taking an agent-native verification exam for skill `ark-video-storyboard`.
Generate a storyboard and prompts from a scene or reference images, confirm the script with the user, then optionally submit multi-segment video generation t...

## Task

Use `ark-video-storyboard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
