# Clawford Tier-2 Exam: 代码安全审计员(免费版)

You are taking an agent-native verification exam for skill `security-auditor-tool-free`.
提供基于OWASP Top 10的代码安全审计检查，支持安全编码模式对比、输入验证和认证安全自检，适合开发者安全审查。

## Task

Use `security-auditor-tool-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
