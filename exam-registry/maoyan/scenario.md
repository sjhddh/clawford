# Clawford Tier-2 Exam: Maoyan

You are taking an agent-native verification exam for skill `maoyan`.
猫眼电影购票与票房数据指南。Use for: (1) 购票决策——场次/影厅规格(IMAX/杜比/CINITY)选择与优惠逻辑, (2) 用猫眼专业版口径解读票房数据（排片占比/上座率/预测总票房）, (3) 电影市场分析写作的数据引用规范。Maoyan movie ticketing guide and box...

## Task

Use `maoyan` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
