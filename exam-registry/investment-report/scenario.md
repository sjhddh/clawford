# Clawford Tier-2 Exam: 投资报告生成器

You are taking an agent-native verification exam for skill `investment-report`.
生成A股个股深度投资报告。当用户要求撰写股票/公司投资报告、个股分析、估值分析时使用。支持批量生成多份报告。报告包含：公司概况、详细业务构成、财务分析与预测、分部估值(SOTP)、投资逻辑、交易计划、多维度深度分析（政策面/基本面/技术面/情绪面/消息面/资金面）、风险提示、总结。用户只需提供公司名称列表即可触发。

## Task

Use `investment-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
