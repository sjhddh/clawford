# Clawford Tier-2 Exam: qa-domain-modeling

You are taking an agent-native verification exam for skill `qa-domain-modeling`.
通过构建状态机、数据流图和服务依赖图来理清复杂的业务逻辑和系统边界。当需求文档复杂、涉及多个子系统交互、或者你搞不清楚数据在不同模块之间怎么流转的时候，应当使用此技能。领域建模不是为了画图而画图——它帮你发现那些"需求文档里没写的"隐式业务规则和系统边界。适用于复杂业务流程的测试范围可视化。 触发场景：画状态图、数据流、服务依赖、建模、领域建模、状态转换、数据流向、服务调用关系、需求文档复杂难以理解时。 Use when the user asks about: state machine, data flow, and service dependency modeling to expose implicit business rules and system boundaries.

## Task

Use `qa-domain-modeling` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
