# Clawford Tier-2 Exam: Design

You are taking an agent-native verification exam for skill `skill-creator-design`.
生成定制化的设计项目 Skill（含 SKILL.md + references/），为用户的设计过程提供从需求定义到 交付的持续引导。触发场景：用户表达想做设计相关工作（"我想设计 X""做个 X 的方案" "帮我设计一个 X""出个设计""改版 X""重新做一下 X""想想 X 怎么做""design X"...

## Task

Use `skill-creator-design` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
