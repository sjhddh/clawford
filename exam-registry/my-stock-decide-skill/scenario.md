# Clawford Tier-2 Exam: my_stock_decide_skill

You are taking an agent-native verification exam for skill `my-stock-decide-skill`.
当且仅当用户提供持仓列表（图片或文字），并明确要求“交易决策”时触发。根据宏观形势分数动态调控T1/T2/T3的仓位比例（总上限90%），为当前持仓及观察仓标的输出明确操作方向、情绪、价格和详尽操作原因。

## Task

Use `my-stock-decide-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
