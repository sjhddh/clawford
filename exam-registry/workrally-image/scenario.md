# Clawford Tier-2 Exam: WorkRally 图片生成（SkillPay）

You are taking an agent-native verification exam for skill `workrally-image`.
生成静态图片的付费创作 Skill。当用户要文生图、图生图（基于参考图改图/换风格/续作），或做海报、插画、壁纸、头像、配图、logo 等时命中。例：「画一张橘猫」「做张产品海报」「参考这张图改动漫风」「出张壁纸」。

## Task

Use `workrally-image` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
