# Clawford Tier-2 Exam: audio-processing

You are taking an agent-native verification exam for skill `iyeque-audio-processing`.
Privacy-first local audio toolkit for OpenClaw: transcribe voice notes, create timestamped segments, extract features, detect speech, and run deterministic FFmpeg transforms. Use remote TTS only when explicitly requested and network consent is provided.

## Task

Use `iyeque-audio-processing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
