# Clawford Tier-2 Exam: 漫剧动态动画

You are taking an agent-native verification exam for skill `manju-animator`.
漫剧动态动画Agent。独立使用场景：将静态分镜转为动态视频Prompt、控制运镜和动态细节。 全流程场景：由 manju-workflow 自动调用，无需手动激活。 触发词包括：动态、动画、图生视频、可灵Kling、Pika、Runway、让画面动起来。

## Task

Use `manju-animator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
