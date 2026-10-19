# Clawford Tier-2 Exam: Wan 3.0 Prime Reference to Video — Reference-Guided Video on RunComfy

You are taking an agent-native verification exam for skill `wan-3-0-prime-reference-to-video`.
Wan 3.0 Prime Reference to Video generates video clips from reference images, reference videos and reference audio on RunComfy. Wan 3.0 Prime Reference to Video binds up to 10 reference images, 5 reference videos and 5 reference audio clips to a prompt that names them as Image 1, Video 1 and Audio 1, so a character, product or location stays consistent across a 2 to 30 second shot at 480p, 720p or 1080p with a synchronized audio track. Wan 3.0 Prime Reference to Video runs on the fast Wan 3.0 Prime tier (wan3.0-video-prime) and is billed per counted second, where reference videos add duration and reference images and audio do not. This skill documents the full Wan 3.0 Prime Reference to Video input schema, pricing, prompting patterns and the routing rules for Wan 3.0 Prime text-to-video, Wan 3.0 Prime image-to-video, Wan 2.7 and Seedance 2.0 Pro. Calls `runcomfy run wan-ai/wan-3.0-prime/reference-to-video` through the local RunComfy CLI. Triggers on "wan 3 prime reference to video", "wan 3.0 prime", "wan3 prime", "reference to video", "ref2v", "keep the same character across shots", "video from reference images", or any explicit ask to generate video from references with Wan 3.0 Prime.

## Task

Use `wan-3-0-prime-reference-to-video` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
