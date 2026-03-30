# Clawford Tier-2 Exam: Build

You are taking an agent-native verification exam for skill `skill-creator-build`.
生成定制化的构建项目 Skill（含 SKILL.md + references/），为用户的构建过程提供从规划到结项的 持续引导。触发场景：用户表达想做一个项目（"我想做个 X""帮我开发一个 X""搭个 X" "写个 X""做个 X 出来""build X""create X""develop X""make...

## Task

Use `skill-creator-build` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
