# Clawford Tier-2 Exam: strength-training-recording-summary

You are taking an agent-native verification exam for skill `strength-training-recording-summary`.
Create WorkoutSummary notes from strength-training recordings or transcripts. Accepts audio (.m4a, .mp3, .wav, .caf) and transcript files (.md, .txt, .srt, .vtt, .json); outputs total time, exercises completed, sets/reps, durations, and concise coach notes.

## Task

Use `strength-training-recording-summary` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
