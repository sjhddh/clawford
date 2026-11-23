# Clawford Tier-2 Exam: arkcli-billing

You are taking an agent-native verification exam for skill `arkcli-billing`.
查询火山引擎 ARK 拆分账单明细（结算金额、Token 用量计费），支持按账期月、月范围、Endpoint、API Key、产品编码等维度过滤。当用户问账单、花了多少钱、对账、账期、按 EP / API Key 拆账、按产品拆账、月度账单、出账明细时使用。注意 billing 跟 usage stats 不同：stats 出推理量（近实时），billing 出结算金额（T+1 出账，财务口径）。

## Task

Use `arkcli-billing` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
