# Clawford Tier-2 Exam: 麦当劳点餐

You are taking an agent-native verification exam for skill `mcdonalds`.
麦当劳中国 MCP 服务集成，支持优惠券、点餐、外卖、积分商城等功能。当用户提到麦当劳、McDonald's、麦乐送、麦麦省、麦当劳优惠券、麦当劳积分、麦当劳点餐时触发此技能。

## Task

Use `mcdonalds` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
