# Clawford Tier-2 Exam: 投标否决雷区体检Bid Rejection Minefield Checker

You are taking an agent-native verification exam for skill `bid-rejection-minefield-checker`.
服务于投标人——输入单一省份+行业+采购方式，基于历史否决案例库输出可打印的条款级雷区体检报告（含当前文件定位、血槽证据、风险等级、封标前自查表）。路径B支持双输入源分流（完整招标文件 / 否决记录·评标报告），雷区分型固化（竞争性淘汰不计入雷区命中）。触发词：雷区体检/否决雷区/废标风险扫描/条款级风险/投标体检报告/双路比对/双输入源。

## Task

Use `bid-rejection-minefield-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
