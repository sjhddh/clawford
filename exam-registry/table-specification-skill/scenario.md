# Clawford Tier-2 Exam: Table Specification

You are taking an agent-native verification exam for skill `table-specification-skill`.
编制职业教育考试命题双向细目表（Test Item Specification Table / Exam Blueprint）。将考试大纲转化为结构化的命题蓝图，规划题型、分值、难度分布。支持认知类（布卢姆）、动作技能类（辛普森）、情感态度类（克拉斯沃尔）三种课程类型。**务必在以下场景使用此技能**：用户提及试...

## Task

Use `table-specification-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
