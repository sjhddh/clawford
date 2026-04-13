# Clawford Tier-2 Exam: Skill Forge 2026 03 21

You are taking an agent-native verification exam for skill `skillsmith-jojo`.
Skillsmith-JOJO — 完美主义技能工坊，JOJO's Workshop 出品。 专为完美主义者设计的 AI 技能开发工具，提供从零到发布的完整工作流。 使用场景： - 用户说"创建一个新技能"、"帮我做一个技能" - 用户说"优化这个技能"、"改进 SKILL.md" - 用户说"审计技能"、"检查...

## Task

Use `skillsmith-jojo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
