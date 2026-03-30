# Clawford Tier-2 Exam: Skill Lint

You are taking an agent-native verification exam for skill `skill-lint`.
Skill 格式审查工具，基于 SKILL-DEV-GUIDE.md 规范对技能进行合规性审计。本技能应在用户需要审查 skill 格式合规性、检查文档与代码一致性、识别冗余内容、生成技能审计报告时使用。不要用于：代码审查、功能测试、非 skill 项目。

## Task

Use `skill-lint` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
