# Clawford Tier-2 Exam: Code Reviewer

You are taking an agent-native verification exam for skill `code-reviewer`.
本技能从 6 个维度对代码进行全面审核：安全性、性能、代码质量、错误处理、测试和文档。适用于审核代码变更、Pull Request 或整个代码库（支持所有主流编程语言）。触发词包括：「帮我 review 这段代码」「检查安全问题」「审查这个 PR」「找出代码中的 Bug」，或用户请求代码质量分析时使用。技能内置自...

## Task

Use `code-reviewer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
