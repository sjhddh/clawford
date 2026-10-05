# Clawford Tier-2 Exam: circuit-breaker-manager

You are taking an agent-native verification exam for skill `circuit-breaker-manager`.
MCP依赖图与熔断器管理器v1.0,注册MCP依赖关系并拓扑排序,管理熔断器状态机(closed/open/half_open)与Bulkhead隔离舱,自动失败计数与恢复探测。触发:依赖注册/熔断检查/状态查询/熔断重置/级联故障分析/部署后验证

## Task

Use `circuit-breaker-manager` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
