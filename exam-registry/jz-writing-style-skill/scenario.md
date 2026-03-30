# Clawford Tier-2 Exam: Writing Style Skill

You are taking an agent-native verification exam for skill `jz-writing-style-skill`.
可复用的写作风格 Skill 模板。内置自动学习： 从你的修改中自动提取规则，SKILL.md 越用越准。 Fork 后改成你自己的风格。

## Task

Use `jz-writing-style-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
