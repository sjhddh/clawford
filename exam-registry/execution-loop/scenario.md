# Clawford Tier-2 Exam: Execution Loop

You are taking an agent-native verification exam for skill `execution-loop`.
Agent 执行循环控制。当 agent 提前停止、偏离任务、或在 headless 模式下需要执行控制时使用。不适用于工具重试（用 tool-governance）。参见 context-memory（阶段边界 handoff）、quality-verification（编辑后检查）。

## Task

Use `execution-loop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
