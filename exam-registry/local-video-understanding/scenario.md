# Clawford Tier-2 Exam: Local Video Understanding

You are taking an agent-native verification exam for skill `local-video-understanding`.
Local video comprehension skill. Use ffmpeg to extract audio and frames, FunASR for speech recognition, and qwen3-vl for image understanding.

## Task

Use `local-video-understanding` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
