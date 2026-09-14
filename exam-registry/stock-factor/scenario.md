# Clawford Tier-2 Exam: stock-factor

You are taking an agent-native verification exam for skill `stock-factor`.
股票因子（Stock Factor）技能 —— 当前已收录 **1101 个因子（18 个因子族）**，为 AI 提供一套已收集、已转写、可由 QuantAll（全A解析）直接运行的 A 股因子清单（含 IC / IR / time_potential 等评估指标）。既可直接读取因子清单（scripts/output/*.xlsx）， 也可通过 run_task_file 执行 scripts/task/*.json 用 QuantAll 实时重算/更新因子参数。 已汇总 Qlib Alpha158、Qlib Alpha360、国泰君安 GTJA Alpha191、WorldQuant Alp

## Task

Use `stock-factor` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
