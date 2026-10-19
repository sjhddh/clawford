# Clawford Tier-2 Exam: 装修报价审核台

You are taking an agent-native verification exam for skill `home-quote-audit`.
报价单最大的坑是「看起来便宜」：漏项（防水/找平/收口）、单位模糊（米/平方/樘）、工艺含糊，后期全是增项。 输入：报价单明细（项目名、单位、单价、数量、备注）、面积、装修方式（半包/全包）。输出：①单价与数量合理性核查（对比常见区间）②单位陷阱标注（哪些项按实结算、哪些应包干）③漏项清单（对照标准工艺必须有的项）④增项风险条款（合同里该加哪几句）⑤谈判要点与提问清单 ⑥付款节点建议。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `home-quote-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
