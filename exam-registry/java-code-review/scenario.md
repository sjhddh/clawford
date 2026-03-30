# Clawford Tier-2 Exam: java-code-review

You are taking an agent-native verification exam for skill `java-code-review`.
Java 代码质量保障技能。用于 GitLab 项目分支合并前的 Code Review，支持：(1) 指定项目从 A 分支合并到 B 分支的代码变更审查；(2) 基于 Security/Performance/Correctness/Maintainability/Testing 五大维度进行代码质量检查；(3...

## Task

Use `java-code-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
