# Clawford Tier-2 Exam: AI Video Gen

You are taking an agent-native verification exam for skill `video-gen`.
AI视频生成与编辑，使用火山引擎 Doubao Seedance 模型。支持文生视频、图生视频、有声视频。当用户要求生成视频、制作视频、文生视频、图生视频时使用此 skill。

## Task

Use `video-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
