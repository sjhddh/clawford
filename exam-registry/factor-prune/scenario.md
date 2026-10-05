# Clawford Tier-2 Exam: factor-prune

You are taking an agent-native verification exam for skill `factor-prune`.
因子筛选（Factor Prune）技能 —— 在 stock-factor 技能产出初始因子清单（IC/IR 评估结果）后， 对有效因子做贪心前向选择 + 去相关筛选，精选出一组高有效性、低冗余的因子集合。 算法：汇总所有因子 → 按 |IR|/IC/time_potential 筛选有效 → 按有效性降序 → 贪心提取最优因子 → 与剩余因子做相关性评估 → 移除高相关冗余 → 提取下一个 → 如此反复直到收敛或达到上限。 技能提供两套主实现： (1) 文件驱动六步法 `prune_flow.py`（推荐）——脚本直连 QuantAll 自己跑完整个循环，临时文件统一在内存外的 state

## Task

Use `factor-prune` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
