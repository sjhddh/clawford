# Clawford Tier-2 Exam: decision-review

You are taking an agent-native verification exam for skill `decision-review`.
决策复盘与反思助手。给定一次决策/事件，按结构化模板产出复盘（背景→决策→行动→结果→得失→根因→改进），支持 AAR（行动后复盘）与定期回顾。当用户需要"帮我复盘""这次决策怎么样""做个 retrospective""总结一下教训"时调用。

## Task

Use `decision-review` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
