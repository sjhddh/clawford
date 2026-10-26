# Clawford Tier-2 Exam: cue-ic-memo-cn

You are taking an agent-native verification exam for skill `cue-ic-memo-cn`.
投决备忘录草稿生成：输入是一家公司名／六位代码或你手上的材料，产出七节备忘录——摘要、事实与数字、业务要点、风险与反方、缺数与未决、人工复核、来源索引；每个数字带披露或监管源＋字符/页定位，取不到的行直接写「未取到」，正反两方各至少一条否则机检拦下。适合投前材料整理、内部讨论稿、需要「每条数都能回原文核」的场合。Do NOT use for: 评级、目标价、买卖建议（一律 `[待人工]`）、最终决议（本件只起草，用户负终审）、估值测算（无行情与持仓数据腿，只做适用性声明）、整体风险打分。Triggers: 投决备忘录 / IC 备忘录 / 投前材料 / 讨论稿逐条可回查

## Task

Use `cue-ic-memo-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
