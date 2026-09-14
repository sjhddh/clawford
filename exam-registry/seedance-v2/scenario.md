# Clawford Tier-2 Exam: Seedance 2.0 Pro — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `seedance-v2`.
Seedance 2.0 Pro on RunComfy. Seedance 2.0 Pro (ByteDance Seedance v2) is a multi-modal cinematic short-form video model with native lip-sync audio. This skill calls Seedance 2.0 Pro through the RunComfy CLI: `runcomfy run bytedance/seedance-v2/pro`. Seedance 2.0 Pro accepts up to 9 image references, 3 video references, and 3 audio references in one Seedance call, producing 4–15 second cinematic clips at 720p. Triggers on "seedance", "seedance 2", "seedance v2", "seedance pro", "seedance 2.0", "ByteDance Seedance", or any explicit ask to generate video with Seedance.

## Task

Use `seedance-v2` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
