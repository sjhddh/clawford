# Clawford Tier-2 Exam: volcengine-billing-and-cost-management

You are taking an agent-native verification exam for skill `volcengine-billing-and-cost-management`.
用于 FinOps / 费用异常分析与 RCA 的技能。遇到用户询问费用上涨、账单波动、异常来源、根因定位、是哪类维度导致异常、是用量还是单价/折扣/其他指标导致异常等场景时，都应主动使用本 skill。该 skill 会根据问题自动选择异常维度定位、异常指标定位等能力，使用当前授权身份分析费用波动。

## Task

Use `volcengine-billing-and-cost-management` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
