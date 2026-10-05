# Clawford Tier-2 Exam: 宠物日常照护计划台

You are taking an agent-native verification exam for skill `pet-daily-care`.
新手养宠最慌的是「到底该喂多少、要不要洗澡、什么时候驱虫」，网上说法互相矛盾。 输入：宠物种类与品种、月龄/年龄、体重、绝育与否、居住环境（楼房/有无院子）、已有照护习惯。输出：①每日节奏表（喂食次数与量级方向、饮水、遛/互动时长）②周期事项表（驱虫/疫苗/洗澡/剪甲的建议周期与注意事项）③环境布置清单（猫砂/窝/防抓/防误食）④异常信号清单（何时必须就医）⑤新手常见误区 ⑥月度记录表。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `pet-daily-care` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
