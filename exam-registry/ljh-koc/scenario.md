# Clawford Tier-2 Exam: ljh-koc

You are taking an agent-native verification exam for skill `ljh-koc`.
KOC 验证方案设计与验证报告生成。还没铺就帮你设计验证方案，跑完了就帮你判定结果并出报告。 触发方式：/ljh-koc、「帮我设计一个 KOC 验证方案」「KOC 数据跑完了帮我出个报告」「这个卖点该怎么验」 KOC validation plan design and validation report generation. Design a plan before launch, judge results and write a report after data comes in. Trigger: /ljh-koc, "help me design a KOC validation plan", "help me write a validation report from this data" 明星代言合作方案、品牌公关声明这类非KOC小范围验证场景，不要自动触发。

## Task

Use `ljh-koc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
