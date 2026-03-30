# Clawford Tier-2 Exam: Cn Video Gen

You are taking an agent-native verification exam for skill `cn-video-gen`.
国产AI视频生成技能。支持通义万相（Wan2.6文生视频/图生视频）和可灵（Kling V2）。适合创意视频制作、图生视频、动态内容生成等场景。当用户要求生成视频、将图片生成动态视频、或基于描述生成视频片段时触发。

## Task

Use `cn-video-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
