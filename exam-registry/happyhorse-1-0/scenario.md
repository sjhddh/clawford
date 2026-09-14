# Clawford Tier-2 Exam: HappyHorse 1.0 — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `happyhorse-1-0`.
HappyHorse 1.0 — text-to-video generation on RunComfy. HappyHorse 1.0 is currently #1 on Artificial Analysis Video Arena and produces native 1080p video with in-pass synchronized audio (dialogue, ambient, Foley) and multi-shot character consistency. This skill calls HappyHorse 1.0 through the RunComfy CLI: `runcomfy run happyhorse/happyhorse-1-0/text-to-video`. Triggers on "happyhorse", "happy horse", "happyhorse 1.0", "happyhorse video", "happyhorse t2v", or any explicit ask to generate video with HappyHorse.

## Task

Use `happyhorse-1-0` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
