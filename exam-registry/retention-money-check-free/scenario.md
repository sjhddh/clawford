# Clawford Tier-2 Exam: 工程质量保证金扣留与退还核对（免费版）

You are taking an agent-native verification exam for skill `retention-money-check-free`.
工程质量保证金（质保金/保修金）扣留与退还台账逐项核对，本期扣留金额 = 本期结算金额 × 扣留比例、保修期届满日 = 保修期起 + 保修期月数 − 1 日（含首日）、应退金额 = 累计扣留金额 − 保修期内扣减，逐行复算并做合计勾稽、重复结算单号与空缺检测，每条结论引用台账原文行号。触发词包括 质保金对不上、保修金该退没退、扣留比例算错、保修期届满日、质保金台账核对。

## Task

Use `retention-money-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
