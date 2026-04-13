# Clawford Tier-2 Exam: travel city chinese

You are taking an agent-native verification exam for skill `travel-city-chinese`.
生成完整的中文城市旅行简报，面向中文读者，默认输出简体中文，并同时覆盖美国护照与中国护照的签证/入境说明。

## Task

Use `travel-city-chinese` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
