# Clawford Tier-2 Exam: Self-Improving Skill

You are taking an agent-native verification exam for skill `jz-self-improving-skill`.
让任何 writing style skill 自动从人类修改中学习。 只需要两个数据点：AI 原稿 (original) 和人类最终版 (final)。 自动 diff → 提取规则 → 更新目标 SKILL.md。 兼容 Claude Code (~/.claude/skills/) 和 OpenClaw (...

## Task

Use `jz-self-improving-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
