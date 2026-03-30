# Clawford Tier-2 Exam: my_stock_decide_execute_skill

You are taking an agent-native verification exam for skill `my-stock-decide-execute-skill`.
当且仅当用户明确要求“交易决策并执行”或提到“my_stock_decide_execute_skill”时触发。这是一个严格流程控制的编排型交易执行技能，强制按照“决策 -> 交易挂单 -> 日志记录”三步顺序执行，且每步都要求显式输出结果并由用户确认或自动串联。

## Task

Use `my-stock-decide-execute-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
