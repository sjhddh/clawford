# Clawford Tier-2 Exam: 家常菜谱生成

You are taking an agent-native verification exam for skill `home-recipe-generator-free`.
根据食材、想做的菜名、口味或人数，生成可落地的家常菜谱，含用量、步骤、火候与失败补救。触发词：菜谱、怎么做、家常菜、今天做什么菜、用XX食材做什么。

## Task

Use `home-recipe-generator-free` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
