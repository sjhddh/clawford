# Clawford Tier-2 Exam: 麦当劳MCP自动化工具

You are taking an agent-native verification exam for skill `mcd-mcp`.
麦当劳MCP接口自动化工具，支持自动领券、查询门店库存、计算最优优惠组合、一键下单，解决麦当劳优惠券手动领取麻烦、库存查询不便的问题。

## Task

Use `mcd-mcp` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
