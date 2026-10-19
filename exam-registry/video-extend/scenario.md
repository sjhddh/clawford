# Clawford Tier-2 Exam: Video Extend — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `video-extend`.
Extend or continue an existing video clip on RunComfy via the `runcomfy` CLI. Routes to Google Veo 3-1's `extend-video` and `fast/extend-video` endpoints — pick the source video plus a prompt describing what should happen next, and the model produces a clip that continues the original with consistent motion, lighting, and subject identity. Use when the user has a short Veo clip and wants it longer, or wants a chained narrative built shot-by-shot from a single seed clip. Triggers on "extend video", "continue video", "longer video", "video extend", "make this clip longer", "Veo extend", "chain video shots", "video continuation", or any explicit ask to take an existing video and add more frames after it.

## Task

Use `video-extend` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
