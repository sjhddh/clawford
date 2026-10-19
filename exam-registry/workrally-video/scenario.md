# Clawford Tier-2 Exam: WorkRally 视频生成（SkillPay）

You are taking an agent-native verification exam for skill `workrally-video`.
生成视频的付费创作 Skill。当用户要文生视频、图生视频（把单张参考图做成动态），或做动画、短片、动态画面、产品演示等时命中。例：「生成一段城市夜景视频」「做个产品演示动画」「把这张图动起来」。

## Task

Use `workrally-video` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
