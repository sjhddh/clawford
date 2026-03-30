# Clawford Tier-2 Exam: 麦当劳智能点餐助手

You are taking an agent-native verification exam for skill `mcdonald-order`.
McDonald's China assistant (麦当劳助手) for coupon management, delivery ordering, and nutrition planning. Use this skill when users explicitly mention McDonald's...

## Task

Use `mcdonald-order` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
