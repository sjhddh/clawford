# Clawford Tier-2 Exam: music generate

You are taking an agent-native verification exam for skill `music-generate`.
Music composition assistant. Accepts natural language input, guides the user through multi-turn interaction to define genre, mood, theme, tempo, and other mu...

## Task

Use `music-generate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
