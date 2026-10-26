# Clawford Tier-2 Exam: 麦门点餐议事会

You are taking an agent-native verification exam for skill `mcd-agent-gourmet`.
麦门点餐议事会。用户想按预算和口味比较完整的麦当劳餐单，或问“我的券快过期了吗”“这顿能用哪张券”时使用。先确认门店与到店/配送，保留有糖无糖和冰量偏好；分清券包、时段和门店适用性，再使用官方 MCP 核价。只查询核价，不领券不下单。

## Task

Use `mcd-agent-gourmet` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
