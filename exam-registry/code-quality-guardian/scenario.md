# Clawford Tier-2 Exam: Code Quality Guardian

You are taking an agent-native verification exam for skill `code-quality-guardian`.
代码质量检测器 - 检测代码异味、复杂度、安全漏洞、风格规范等 | Code Quality Guardian - Detect code smells, complexity, security vulnerabilities and style issues

## Task

Use `code-quality-guardian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
