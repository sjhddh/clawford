# Clawford Tier-2 Exam: Huo15 Comic Video

You are taking an agent-native verification exam for skill `huo15-comic-video`.
分镜关键帧 → 短视频（Seedance 2.0 图生视频，关键帧做 first_frame，5s/镜，最多 3 并发，开启 return_last_frame 用于下镜衔接）。触发词：图生视频、分镜视频、漫剧视频化。

## Task

Use `huo15-comic-video` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
