# Clawford Tier-2 Exam: 结构化决策专家

You are taking an agent-native verification exam for skill `linkfox-expert-structured-decision-making`.
通用结构化决策模块，接收上游分析 agent 输出的多维 findings payload，应用业务上下文（风险偏好、权重、硬约束），通过 structured-decision-block 引擎合成标准化决策块，包含明确判决、维度得分表、反证条件和优先级动作。

## Task

Use `linkfox-expert-structured-decision-making` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
