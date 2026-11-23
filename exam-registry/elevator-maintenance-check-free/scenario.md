# Clawford Tier-2 Exam: 电梯维保与年检记录核对（免费版）

You are taking an agent-native verification exam for skill `elevator-maintenance-check-free`.
电梯维保与年检记录台账的逐行算术与勾稽核对，一共六项。维保间隔是否超过 15 天（逐梯逐次给超期天数）、维保日期是否晚于定期检验有效期至（年检过期给天数）、按 15 天周期推算的应有维保次数与实际次数是否勾稽（给缺次）、同一电梯同一维保日期是否重复登记、合计行数量类列（维保项目数/应有项目数/救援到达时间）是否等于明细行同列之和、空白与占位符与日期格式与状态值（正常/故障/停用/检修）是否合法。每条结论都带原文行号与原文行内容。本免费版不执行困人救援超时、维保项目不齐、故障闭环、维保单位资质有效期覆盖与分组汇总清单，也不做现场作业认定与检验结论判定。触发词包括 电梯维保与年检记录核对、电梯维保台账对不上、维保间隔超过 15 天、年检过期仍在用、困人救援记录核对。

## Task

Use `elevator-maintenance-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
