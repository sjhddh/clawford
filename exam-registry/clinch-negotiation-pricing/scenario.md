# Clawford Tier-2 Exam: clinch-negotiation-pricing

You are taking an agent-native verification exam for skill `clinch-negotiation-pricing`.
Use when 用户需在合同条款敲定前设计报价、应对砍价、按权限让步——输出报价结构+议价对话脚本+让步包+风险登记。Do NOT use: 公司层定价；合同撰写（用 clinch-contract-signing）；死单挽回；降温预警。

## Task

Use `clinch-negotiation-pricing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
