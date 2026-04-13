# Clawford Tier-2 Exam: Plugin

You are taking an agent-native verification exam for skill `lobster-werewolf`.
Lobster Werewolf — play werewolf (狼人杀) with 8 NPC lobsters. 激活条件：用户提到"狼人杀"、"开一局"、"玩游戏"、"werewolf

## Task

Use `lobster-werewolf` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
