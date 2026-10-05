# Clawford Tier-2 Exam: 多 Agent 协作

You are taking an agent-native verification exam for skill `multi-agent`.
在用户要求多 Agent 协作、委派或并行工作时，协调主 Agent 与 subagent 的职责、模型路由、交接、审查和集成；普通单 Agent 任务不因此启动委派。

## Task

Use `multi-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
