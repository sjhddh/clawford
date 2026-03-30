# Clawford Tier-2 Exam: Recipe to List

You are taking an agent-native verification exam for skill `recipe-to-list`.
Turn recipes into a Todoist Shopping list. Extract ingredients from recipe photos (Gemini Flash vision) or recipe web pages (search + fetch), then compare against the existing Shopping project with conservative synonym/overlap rules, skip pantry staples (salt/pepper), and sum quantities when units match. Also saves each cooked recipe into the workspace cookbook (recipes/).

## Task

Use `recipe-to-list` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
