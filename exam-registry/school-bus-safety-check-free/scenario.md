# Clawford Tier-2 Exam: 校车运行与安全检查记录核对（免费版）

You are taking an agent-native verification exam for skill `school-bus-safety-check-free`.
校车运行与安全检查记录材料逐项核对，本免费版执行 6 项检查（出车检查记录覆盖、检查项目齐全性、驾驶员资格有效期、同一车辆同一日期重复登记、合计行逐列复核、空白与格式检测），每条结论引用原文行号，材料不足不给结论。触发词包括 校车运行与安全检查记录核对、校车出车检查记录、校车驾驶资格到期、照管人员交接记录、校车运行记录对不上。

## Task

Use `school-bus-safety-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
