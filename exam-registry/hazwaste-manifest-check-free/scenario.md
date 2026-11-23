# Clawford Tier-2 Exam: 危险废物转移联单与台账核对（免费版）

You are taking an agent-native verification exam for skill `hazwaste-manifest-check-free`.
危险废物管理台账、转移联单、贮存量与处置结算逐项核对（逐行勾稽、合计复核、重复与空缺及格式检测），每条结论引用原文行号与具体数字。本免费版只执行 6 项，即 贮存量勾稽、联单与台账数量一致、联单金额勾稽、联单号重复登记、合计行逐列复核、必需字段与数值格式检测; 不执行 5 项，例如 贮存超期、跨期归属、接收单位单价一致性。触发词包括 危险废物转移联单与台账核对、危险废物管理台账对不上、危废联单与台账核对、年度申报前核对。

## Task

Use `hazwaste-manifest-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
