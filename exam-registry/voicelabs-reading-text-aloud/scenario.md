# Clawford Tier-2 Exam: Reading Text Aloud

You are taking an agent-native verification exam for skill `voicelabs-reading-text-aloud`.
Turns text into spoken audio in the user's VoiceLabs voices and hands back the audio link. Use when the user asks to 'read this paragraph in my Narrator voice', 'narrate these five sections', 'make a voiceover', 'convert this text to speech', 'generate an audio version', 'say this in my voice', or wants text to speech (TTS) for a script. Generation is metered by the user's plan.

## Task

Use `voicelabs-reading-text-aloud` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
