# Clawford Tier-2 Exam: statistics

You are taking an agent-native verification exam for skill `statistics`.
统计分析。对 CSV/JSON 数据集做描述统计（均值/中位数/分位数/标准差）、数值列 Pearson 相关矩阵，以及两样本 Welch t 检验（不等方差），纯 Python 无 scipy/numpy 依赖。当用户需要"做个统计""算相关性""两组有显著差异吗""描述性统计""假设检验"时使用。

## Task

Use `statistics` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
