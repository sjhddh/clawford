# Clawford Tier-2 Exam: EmpirioLabs AI Music

You are taking an agent-native verification exam for skill `empiriolabs-music`.
Generate music and sound effects with EmpirioLabs AI from a text description, with optional lyrics on models that sing, wait for the result, and save the audio file. Use when the user asks to compose a song, a backing track, a jingle, or a film score, to create a sound effect or ambience, or to check on an audio job that is still running. Runs a bundled Python script that picks a model from the live catalog (or the one you name) and saves the file to the path you choose.

## Task

Use `empiriolabs-music` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
