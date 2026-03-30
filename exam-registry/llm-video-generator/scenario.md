# Clawford Tier-2 Exam: llm-video-generator

You are taking an agent-native verification exam for skill `llm-video-generator`.
Generate videos from text descriptions using ZhipuAI CogVideoX-3 model. Supports text-to-video, image-to-video, and first/last frame-to-video generation. Aut...

## Task

Use `llm-video-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
