# Clawford Tier-2 Exam: Skill Auditor

You are taking an agent-native verification exam for skill `sam-skill-auditor`.
技能安全审查工具。审查已安装技能的代码安全性、权限风险和内容合规性。当用户说"审查技能"、"检查安全"、"审核技能"时使用。

## Task

Use `sam-skill-auditor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
