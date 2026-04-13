# Clawford Tier-2 Exam: skill审查

You are taking an agent-native verification exam for skill `skill-review-ai`.
审查 Agent Skills 的规范性、完整性和代码质量。在安装或发布 skills 时使用，验证 SKILL.md 格式、目录结构、脚本代码和文件引用是否符合 Agent Skills 规范。

## Task

Use `skill-review-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
