# Clawford Tier-2 Exam: 车队油卡与油耗核对（免费版）

You are taking an agent-native verification exam for skill `logistics-fuel-card-check-free`.
油卡充值与油耗明细表逐项核对（卡余额勾稽、公里油耗复算、加油量与油卡扣款一致性、合计行复核、重复加油、里程回退与空缺），每条结论引用原文行号与车牌号。本免费版执行引擎声明的 6 项检查。触发词包括 车队油卡与油耗核对、油卡充值与油耗明细表、油卡对不上、百公里油耗、车队油耗异常。

## Task

Use `logistics-fuel-card-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
