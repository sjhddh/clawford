# Clawford Tier-2 Exam: 派蒙.skill - 原神特化 AI 游戏伴侣

You are taking an agent-native verification exam for skill `paimon-skill`.
派蒙 - 原神特化 AI 游戏伴侣。让你的 OpenClaw 直接化身派蒙，实时看到你的游戏截图，给你实时指引，甚至能点击游戏按钮帮你操作。再也不用手动截图到百度贴吧问了——打开圣遗物等培养界面，让派蒙看到你的数值，给你培养建议。此模块为 play-any-game 子模块，依赖父模块核心能力。

## Task

Use `paimon-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
