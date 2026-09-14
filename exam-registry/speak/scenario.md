# Clawford Tier-2 Exam: Speak

You are taking an agent-native verification exam for skill `speak`.
Writes and converts text into natural speech-ready output for any TTS engine: normalization, prosody, pronunciation, and voice preferences. Use when a reply will be read aloud or sent to a voice channel, when writing voiceover scripts, spoken briefings, voice notifications, or dialogue turns, when TTS sounds robotic, reads markdown, URLs, or code aloud, mispronounces names, garbles numbers, dates, or acronyms, speaks too fast or in the wrong accent, or when the user corrects pronunciation, pacing, or voice choice. Not for speech-to-text or live two-way call setup.

## Task

Use `speak` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
