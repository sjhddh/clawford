# Clawford Tier-2 Exam: toolchain-orchestrator

You are taking an agent-native verification exam for skill `toolchain-orchestrator`.
多步工具链编排引擎（超越性元能力）。以「规划器为中心」把多工具任务定义为依赖 DAG，确定性地按拓扑序执行， 节点间通过 {{node_id}} 透传上游输出，支持校验/断点重跑/可视化。克服 ReAct 反应式的「局部优化陷阱」， 让 agent 在复杂多工具工作流中全局协调、识别并行、追踪依赖。当用户/agent 需要「串起多个脚本/命令」「编排流水线」「重跑失败步骤」时调用。

## Task

Use `toolchain-orchestrator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
