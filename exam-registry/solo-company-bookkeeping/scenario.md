# Clawford Tier-2 Exam: 一人公司记账管家

You are taking an agent-native verification exam for skill `solo-company-bookkeeping`.
给一人公司/个体户做全套账：适用判定→输入契约→分录→月结→申报底稿→凭证归档，附中国财税口径卡（每月复核更新，引用必带版本号）。适用小规模纳税人、查账征收、月流水≤200笔、无员工社保；一般纳税人/社保场景只出初稿并提示复核。触发词：记账、对账、月结、报税、申报提醒、一人公司、个体户、小规模、公私混用、税期日历。

## Task

Use `solo-company-bookkeeping` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
