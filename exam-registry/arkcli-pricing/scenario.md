# Clawford Tier-2 Exam: arkcli-pricing

You are taking an agent-native verification exam for skill `arkcli-pricing`.
查询火山引擎 ARK 基础模型结算单价（含当前账号折扣）以及 AgentPlan / CodingPlan 套餐订阅价格。Price 是账号折后单价，OriginalPrice 是公示原价。模型定价、音频/TTS/ASR 目录价格、套餐价格、折扣价、跨模态价格对比、模型免费额度走这里；实际已发生费用走 billing。只引用当前返回的计价项，目录未返回价格不等于免费或可调用。

## Task

Use `arkcli-pricing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
