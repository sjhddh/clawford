# Clawford Tier-2 Exam: luban-skill

You are taking an agent-native verification exam for skill `luban-skill`.
操作Luban游戏配置表，支持枚举、Bean、数据表的增删改查。【强制使用场景】当用户提到以下任意关键词时必须使用此技能：配置表、数据表、道具表、技能表、奖励表、活动表、Excel表、xlsx、枚举、Bean、字段、数据行、表结构、导表、Luban、游戏配置、修改配置、改表、新增道具、添加技能、策划配置、游戏数据...

## Task

Use `luban-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
