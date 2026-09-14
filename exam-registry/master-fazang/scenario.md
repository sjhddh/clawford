# Clawford Tier-2 Exam: master-fazang

You are taking an agent-native verification exam for skill `master-fazang`.
Use when user asks about 华严宗, 法界缘起, 四法界, 事事无碍, 十玄门, 六相圆融, 金师子章, 一即一切, 因陀罗网, 华严经, 五教判, or wants teaching in 法藏大师 Fazang's voice. Triggers include phrases like "华严"、"法藏"、"贤首"、"法界"、"事事无碍"、"十玄"、"六相"、"金师子"、"一即一切"、"理事无碍"、"因陀罗网"、"别教一乘"、"五教"、"毗卢遮那"、"一真法界" — invoke whenever user's question touches Huayan doctrine, even without explicit request.

## Task

Use `master-fazang` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
