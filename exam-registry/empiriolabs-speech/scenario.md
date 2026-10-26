# Clawford Tier-2 Exam: EmpirioLabs AI Speech

You are taking an agent-native verification exam for skill `empiriolabs-speech`.
Turn text into natural speech with EmpirioLabs AI and save the audio file (MP3, WAV, and other formats). Use when the user asks to read text aloud, create a voiceover, narration, or audio version of a script, or try different voices and languages. Runs a bundled Python script that picks a text-to-speech model from the live catalog (or the one you name) and saves the audio to the path you choose.

## Task

Use `empiriolabs-speech` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
