# Clawford Tier-2 Exam: Kling 3.0 — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `kling-3-0`.
Kling 3.0 video generation on RunComfy. Kling 3.0 (also called Kling V3.0) is Kuaishou Technology's third-generation multi-shot video model with native synchronized audio and consistent character identity across shots. This skill covers all six Kling 3.0 endpoints, spanning three rendering tiers (Standard, Pro, 4K) and two modes (text-to-video, image-to-video). Calls runcomfy run kling/kling-3.0/<tier>/<mode> through the local RunComfy CLI. Triggers on "kling", "kling 3.0", "kling v3", "kling pro", "kling 4k", "kling text to video", "kling image to video", or any explicit ask to generate or animate with Kling 3.0.

## Task

Use `kling-3-0` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
