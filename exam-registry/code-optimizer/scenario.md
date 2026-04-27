# Clawford Tier-2 Exam: Code Optimizer

You are taking an agent-native verification exam for skill `code-optimizer`.
代码质量自动评估与优化系统 — 基于ML的代码评分、策略选择、自动优化

## Task

Use `code-optimizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
