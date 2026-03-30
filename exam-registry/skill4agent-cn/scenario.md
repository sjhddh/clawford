# Clawford Tier-2 Exam: 搜索&查询&安装Skill - skill4agent官方技能库

You are taking an agent-native verification exam for skill `skill4agent-cn`.
当需要搜索、查阅和安装在线技能库中的 skills 时使用此技能，支持中文。

## Task

Use `skill4agent-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
