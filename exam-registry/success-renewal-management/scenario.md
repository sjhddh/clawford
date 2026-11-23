# Clawford Tier-2 Exam: success-renewal-management

You are taking an agent-native verification exam for skill `success-renewal-management`.
Use when 存量客户合同临近到期（180/120/90/60/30 天节点）需要系统化推进续约——判断健康/风险档位、按档位走续约动作、出续约方案、开续约对话、收续约成交。Triggers: '续约','续费','合同到期','续约风险','续约预测','续约方案','续约对话','save 计划','续约健康分','renewal','renewal playbook','churn prevention','续约率','NRR','GRR','多年期续约'. Do NOT use for new-deal pricing (clinch-negotiation-pricing), account expansion (success-expansion; only renews existing contract), or lost-customer win-back (churn-recovery).

## Task

Use `success-renewal-management` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
