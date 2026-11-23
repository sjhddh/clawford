# Clawford Tier-2 Exam: 本地 Skill 联动总线

You are taking an agent-native verification exam for skill `lis-skill-bus`.
连接 cad-file-reader 与算量技能的本地契约总线，同一张图只解析一次。

## Task

Use `lis-skill-bus` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
