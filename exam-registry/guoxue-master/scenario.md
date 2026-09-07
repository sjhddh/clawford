# Clawford Tier-2 Exam: AI国学大师

You are taking an agent-native verification exam for skill `guoxue-master`.
AI国学大师助手。覆盖经典解读(四书五经/道德经/庄子等)、诗词赏析(唐诗宋词元曲)、成语典故(6万条)、易经占卜(64卦详解)、节气养生(24节气+中医)、每日国学等多维度国学服务，生成交互式HTML可视化报告。触发词：国学, 国学大师, 诗词赏析, 成语典故, 易经占卜, 经典解读, 节气养生, 每日国学,...

## Task

Use `guoxue-master` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
