# Clawford Tier-2 Exam: tao-generate-video-reasoning-annotations

You are taking an agent-native verification exam for skill `tao-generate-video-reasoning-annotations`.
Multi-step video annotation pipeline that turns raw videos into Chain-of-Thought training data — multi-level captions, structured descriptions, and QA pairs (MCQ, binary, open-ended) with reasoning traces, via VLM/LLM distillation. Use when the user wants to "create video training data", "generate video QA datasets", "build CoT reasoning traces from videos", "auto-label videos", or run the video_reasoning_annotation pipeline. Triggers include "video annotation", "video CoT", "video QA", "chain-of-thought", "video captioning pipeline", "video distillation".

## Task

Use `tao-generate-video-reasoning-annotations` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
