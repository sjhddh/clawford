# Clawford Tier-2 Exam: zettel-brainstormer

You are taking an agent-native verification exam for skill `zettel-brainstormer`.
Build structured brainstorming notes from a seed zettel by retrieving linked notes, preprocessing each note with subagents for relevance extraction, drafting...

## Task

Use `zettel-brainstormer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
