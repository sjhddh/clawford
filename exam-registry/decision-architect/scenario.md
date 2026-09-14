# Clawford Tier-2 Exam: 决策架构师

You are taking an agent-native verification exam for skill `decision-architect`.
面向 AI Agent 的结构化决策支持系统，提供决策框架匹配、认知偏差检测、风险画像学习与强制复盘闭环. 内置 8 类决策框架（决策矩阵、成本效益、前置分析、预演困境、机会成本、二阶思维、奥卡姆剃刀、可逆性评估）， 按"领域×类型"双维度自动匹配最佳框架。扫描 12 类常见认知偏差并标注潜在信号，避免单点误判....

## Task

Use `decision-architect` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
