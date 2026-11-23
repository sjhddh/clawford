# Clawford Tier-2 Exam: 专利参数提取

You are taking an agent-native verification exam for skill `patent-parameter-extraction`.
专利参数提取、实施例参数、工艺条件表。当用户要从指定专利中整理温度、时间、配比、结构尺寸或实验指标时使用，保留条件和出处，不直接做效果排名。 Extract process settings, compositions and test results from supplied patent specifications, linking each value to its example, conditions, original unit and source passage.

## Task

Use `patent-parameter-extraction` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
