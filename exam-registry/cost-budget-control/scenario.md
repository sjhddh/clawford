# Clawford Tier-2 Exam: cost-budget-control

You are taking an agent-native verification exam for skill `cost-budget-control`.
成本与算力预算控制：对每次推理与工具调用做 token 与成本预算估算与硬性拦截，并提供 压缩降本建议，让超级智能体可规模化、可控成本地运行，是可靠超越的落地前提。

## Task

Use `cost-budget-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
