# Clawford Tier-2 Exam: 报价单生成

You are taking an agent-native verification exam for skill `quotation-generator`.
专业的报价单生成助手。根据用户上传的物料价格表和Excel报价模板，自动分析模板结构、匹配产品价格、计算总价，生成填充完整的报价单Excel。触发场景：用户需要生成报价单、填写报价模板、根据物料清单计算报价、处理多型号产品选型确认、适配不同格式的Excel报价模板。关键词：报价单、报价模板、物料清单、价格计算、生成报价、填写报价、Excel模板适配。

## Task

Use `quotation-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
