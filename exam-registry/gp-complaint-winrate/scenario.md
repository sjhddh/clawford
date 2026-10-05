# Clawford Tier-2 Exam: 政采投诉策略“胜诉率”预判

You are taking an agent-native verification exam for skill `gp-complaint-winrate`.
政采投诉"胜诉率"预判模型（供应商/投诉人攻向）——供应商输入自身遭遇的不公情形，系统通过"投诉事项结构化拆解+5万+真实投诉处理决定类案相似度比对"，以真实检索样本计数给出投诉成功率（成立率）预测，并按"证据充分性"做条件分层（强证据/弱证据分层胜诉率），输出证据收集与补强路线图。触发词："投诉胜诉率""投诉成功概率""这个投诉能成吗""类案成立率""投诉被驳回概率""证据够不够投诉""投诉策略预判""判例法胜诉预判"。不适用：采购人/代理机构被质疑后的防御答复（应路由至政采质疑类案智库/政采盾牌）；工程招投标投诉（法域不同）；评标打分、合同审查、招标文件编制。

## Task

Use `gp-complaint-winrate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
