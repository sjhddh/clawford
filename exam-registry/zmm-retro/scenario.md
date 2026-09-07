# Clawford Tier-2 Exam: 詹明明·发布后复盘

You are taking an agent-native verification exam for skill `zmm-retro`.
📐 詹明明·发布后复盘 ——短视频复盘技能。发布后把真实平台数据收回来，对照发布前的预判做归因讨论，把验证过的规律写进技能记忆——让系统学会「为什么这条火」。 触发方式：/zmm-retro、/数据出来了、/复盘、/zmm-复盘、「这条数据出来了」「为什么这条火」「为什么这条没火」「复盘一下」 Post-publish retro: collect real platform data, attribute against pre-publish predictions, write validated patterns into skill memory. Trigger: /zmm-retro, "the numbers are in", "why did this video flop/pop" —— 📐 詹明明 · 不给公式，给判据。每条规则都标了实测代价。

## Task

Use `zmm-retro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
