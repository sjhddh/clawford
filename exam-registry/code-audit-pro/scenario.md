# Clawford Tier-2 Exam: Code Audit Pro

You are taking an agent-native verification exam for skill `code-audit-pro`.
全方位AI代码审查：安全/性能/逻辑/风格/AI幻觉，支持PR审核、多语言规则、增量扫描

## Task

Use `code-audit-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
