# Clawford Tier-2 Exam: 增值税加计抵减核对（免费版）

You are taking an agent-native verification exam for skill `vat-deduction-addon-check-free`.
加计抵减台账逐项核对（逐行复算、合计勾稽、重复与空缺检测），每条结论引用原文。本免费版执行引擎声明的免费检查项。触发词包括 增值税加计抵减核对、加计抵减台账对不上。本免费版只执行 6 项，即 合计行逐列复核、期末余额 = 期初余额 + 本期计提 − 本期调减 − 本期实际抵减、本期实际抵减 ≤ 抵减前应纳税额等。不执行 5 项判定，例如 本期计提 = 当期可抵扣进项税额 × 加计抵减比例 复算。详见 SKILL.md 的「这个免费版不包含」一节。

## Task

Use `vat-deduction-addon-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
