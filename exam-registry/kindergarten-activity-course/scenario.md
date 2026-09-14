# Clawford Tier-2 Exam: 幼儿园五大领域活动方案

You are taking an agent-native verification exam for skill `kindergarten-activity-course`.
3-6 岁幼儿五大领域活动方案生成器。按 小班/中班/大班/幼小衔接 与 健康/语言/社会/科学/艺术 五域，从内置活动库挑选游戏、小实验、手工、生活任务，生成 A4 可打印活动卡（领域目标、材料清单、分步玩法、家长安全提示、时长），支持一周活动计划组合。Use when 用户提到 幼儿/孩子/幼儿园/亲子/陪玩 的 活动、游戏、亲子活动、手工、画画、小实验、科学实验、运动游戏、户外活动、带娃、周计划、活动方案、活动卡；or asks for kindergarten activities, kids games, crafts, science experiments, family activity plans. Also use when 需要为幼儿园五大领域设计活动或安排一周亲子活动。注意：若用户要的是练习题（数学/思维/英语题），请使用对应的练习型 Skill。

## Task

Use `kindergarten-activity-course` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
