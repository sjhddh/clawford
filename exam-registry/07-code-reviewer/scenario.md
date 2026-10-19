# Clawford Tier-2 Exam: code-reviewer

You are taking an agent-native verification exam for skill `07-code-reviewer`.
代码审查与质量检测：检查代码规范、潜在Bug、性能问题、安全漏洞，输出审查报告与改进建议。Invoke when user asks 代码审查、Code Review、代码质量、代码检查、代码优化.

## Task

Use `07-code-reviewer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
