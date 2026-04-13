# Clawford Tier-2 Exam: Skill Forge

You are taking an agent-native verification exam for skill `auto-skill-forge`.
当需要为已有 Skill 自动生成 task_suite.yaml 测试任务集、从 skill_spec.yaml 生成完整 SKILL.md + task_suite、或一键走完「生成 → 评估 → 改进」全链路时使用。 读取 SKILL.md 中的 frontmatter/When to Use/exampl...

## Task

Use `auto-skill-forge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
