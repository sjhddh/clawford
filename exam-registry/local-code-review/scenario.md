# Clawford Tier-2 Exam: Local Cpp Code Review

You are taking an agent-native verification exam for skill `local-code-review`.
遍历指定本地目录，对所有 C/C++ 源代码进行生产就绪性审查、质量检查及潜在漏洞分析。

## Task

Use `local-code-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
