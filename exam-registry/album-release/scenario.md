# Clawford Tier-2 Exam: Album Release Pipeline

You are taking an agent-native verification exam for skill `album-release`.
Ship a complete album in one run: write or reuse lyrics, render tracks, generate cover and slideshow art per song, publish either one album film or one video per track plus a playlist, deploy the audio to a radio host, premiere it on air, and fan out the links. Use when releasing a new album, re-running a failed phase, or timing an on-air premiere.

## Task

Use `album-release` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
