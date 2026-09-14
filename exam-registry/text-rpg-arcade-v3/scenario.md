# Clawford Tier-2 Exam: 街机

You are taking an agent-native verification exam for skill `text-rpg-arcade-v3`.
综合性ASCII文字游戏大厅，支持人机和双人对战，严格规则渲染及裁判多种棋类及益智游戏。

## Task

Use `text-rpg-arcade-v3` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
