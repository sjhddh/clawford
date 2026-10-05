# Clawford Tier-2 Exam: Transcribing Audio

You are taking an agent-native verification exam for skill `voicelabs-transcribing-audio`.
Transcribes an audio file to text with VoiceLabs and finds earlier transcripts and recordings. Use when the user asks to 'transcribe this clip', 'convert this voice memo to text', 'transcribe my meeting recording', 'what did I record yesterday', 'search my transcripts', 'summarize what I dictated', or wants speech to text.

## Task

Use `voicelabs-transcribing-audio` to investigate a concrete query and produce an evidence-backed report at `artifacts/voicelabs-transcribing-audio-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/voicelabs-transcribing-audio-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
