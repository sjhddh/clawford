# Clawford Tier-2 Exam: 合作方债务速查

You are taking an agent-native verification exam for skill `debtop-counterparty-check`.
合作方债务速查：给定一家企业名称，快速核查其公开债务线索，输出一页结论化速查卡——是否命中、债务规模（转让 / 处置口径的本金与利息）、最近公告时间、主要债权人与担保线索，用于商务合作、采购、投资、法务的前置参考。当用户说「要和 XX 合作，先查一下有没有债务」「XX 这家公司靠不靠谱 / 有没有债务风险」「签合同前帮我核一下对方」「合作方背景速查」时使用。只需企业名称，免注册免登录，输出为面向非专业用户的速查结论。英文触发词：counterparty check, company debt check, supplier risk check, vendor due diligence, q

## Task

Use `debtop-counterparty-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
