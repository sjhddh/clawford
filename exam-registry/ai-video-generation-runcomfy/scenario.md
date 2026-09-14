# Clawford Tier-2 Exam: AI Video Generation — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `ai-video-generation-runcomfy`.
AI video generation on RunComfy. This RunComfy video generation skill is a smart router across the RunComfy video-model catalog — HappyHorse 1.0 (Arena #1, native in-pass audio), Wan-AI Wan 2-7 (open weights, audio-driven lip-sync), ByteDance Seedance v2 / 1-5 / 1-0 (multi-modal cinematic), Kling 3.0 / 2-6, Google Veo 3-1, MiniMax Hailuo 2-3, ByteDance Dreamina 3-0. RunComfy video generation covers text-to-video (t2v), image-to-video (i2v), and Veo's video-extend endpoint. The RunComfy video generation skill picks the right model for intent (Arena #1 quality, multi-shot character identity, in-pass audio, cinematic motion, fastest path, sub-15s clip, longest duration) and ships each model's documented prompting patterns plus the minimal `runcomfy run` invoke. Calls `runcomfy run <vendor>/<model>/text-to- video` or `/image-to-video` through the local RunComfy CLI. Triggers on "generate video", "make a video", "text to video", "t2v", "image to video", "i2v", "animate", "AI video", "make X move", "video from prompt", "video from image", or any explicit ask to produce a video clip from prompt or still with RunComfy.

## Task

Use `ai-video-generation-runcomfy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
