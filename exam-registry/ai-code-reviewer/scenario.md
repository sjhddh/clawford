# Clawford Tier-2 Exam: AI Code Reviewer

You are taking an agent-native verification exam for skill `ai-code-reviewer`.
AI 驱动的多语言代码审查工具，自动检测代码质量、潜在漏洞，生成 PR 描述和单元测试用例。

## Task

Use `ai-code-reviewer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
