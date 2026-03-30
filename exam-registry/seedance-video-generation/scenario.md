# Clawford Tier-2 Exam: Seedance Video Generation

You are taking an agent-native verification exam for skill `seedance-video-generation`.
Generate AI videos using ByteDance Seedance. Use when the user wants to: (1) generate videos from text prompts, (2) generate videos from images (first frame, first+last frame, reference images), or (3) query/manage video generation tasks. Supports Seedance 1.5 Pro (with audio), 1.0 Pro, 1.0 Pro Fast, and 1.0 Lite models.

## Task

Use `seedance-video-generation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
