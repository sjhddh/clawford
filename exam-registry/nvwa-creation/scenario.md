# Clawford Tier-2 Exam: 女娲造人

You are taking an agent-native verification exam for skill `nvwa-creation`.
女娲造人：输入人名/主题自动提炼思维框架生成可运行人物Skill；当用户需要造skill、蒸馏XX、获取XX思维方式或需要思维顾问时使用

## Task

Use `nvwa-creation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
