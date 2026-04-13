# Clawford Tier-2 Exam: orchestrator-v4

You are taking an agent-native verification exam for skill `orchestrator-v4`.
智能任务编排系统。自动扫描项目规模、规划子任务、动态派发多个 AI Worker 并行执行，支持大项目按模块拆分、自适应超时、滚动派发、用户随时打断改思路。 触发条件：用户需要处理复杂任务、多步骤分析、代码生成、调试分析、研究调查或需要智能调度 AI Worker 时。

## Task

Use `orchestrator-v4` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
