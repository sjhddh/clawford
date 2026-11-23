# Clawford Tier-2 Exam: SkillForge 技能炼金

You are taking an agent-native verification exam for skill `skillforge-pro`.
面向技能作者的质检与优化技能：对任意 SKILL.md 做六维审计，输出评分卡、逐条修改建议与可替换的改写稿；支持批量审计技能库并按影响面排出修复队列。

## Task

Use `skillforge-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
