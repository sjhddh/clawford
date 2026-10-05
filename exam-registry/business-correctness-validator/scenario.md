# Clawford Tier-2 Exam: business-correctness-validator

You are taking an agent-native verification exam for skill `business-correctness-validator`.
业务正确性验证层,LLM输出后独立校验业务规则(28平台内容合规+电商价格风控+风控阈值),校验失败拒绝输出并告警。触发:LLM生成内容后/内容发布前/价格设定后/风控检查 不触发:纯文本生成无校验需求

## Task

Use `business-correctness-validator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
