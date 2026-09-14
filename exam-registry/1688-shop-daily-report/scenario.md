# Clawford Tier-2 Exam: 1688-shop-daily-report

You are taking an agent-native verification exam for skill `1688-shop-daily-report`.
1688 店铺经营日报 —— 生成指定日期的店铺经营日报。 工具能力：展示店铺主要经营数据（GMV、询盘、订单量）、流量数据（UV、PV、CTR、跳失率）、用户数据分析，并进行异常提醒和经营建议。日期不包括今天，默认输出昨天的日报。本 Skill 的流程已由 workflow 编排覆盖，命中触发词时直接执行 workflow。如果 workflow 无法完成任务（如纯能力问答、单命令调用、探索性使用），加载本 SKILL.md 进行推理。 触发词：日报、经营报告、店铺分析、店铺日报、生成日报、经营数据。

## Task

Use `1688-shop-daily-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
