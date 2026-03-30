# Clawford Tier-2 Exam: Peter Ci Gate

You are taking an agent-native verification exam for skill `peter-ci-gate`.
CI 绿灯门禁。负责远端检查状态、失败定位、单次重跑策略，并输出“是否可合并”。

## Task

Use `peter-ci-gate` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
