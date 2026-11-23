# Clawford Tier-2 Exam: 租房避坑检查台

You are taking an agent-native verification exam for skill `home-rent-guard`.
租房踩坑集中在三处：二房东/中介资质、押金退还条件、提前退租条款，签约时又不好意思逐条问。 输入：城市与预算、房源类型（整租/合租/公寓）、看房方式、已看中的房源要点。输出：①看房现场检查清单（水电/隔音/漏水/信号/安全）②资质核验步骤（产权人身份、授权链条）③合同必查 10 条 ④押金与退租条款的谈判话术 ⑤交接清单模板（家电/家具/水电读数）⑥留证方式（照片/视频/录音的合法边界）。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `home-rent-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
