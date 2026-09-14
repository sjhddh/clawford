# Clawford Tier-2 Exam: Code Security Review

You are taking an agent-native verification exam for skill `code-security-review`.
代码安全审查技能。扫描代码仓库，自动检测 OWASP Top 10 安全漏洞、 常见代码缺陷和安全隐患，输出严重程度分级的审查报告和修复方案。 适用于开发者在提交代码前进行安全自检。

## Task

Use `code-security-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
