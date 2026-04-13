# Clawford Tier-2 Exam: C++ Code Review Master

You are taking an agent-native verification exam for skill `cpp-code-review-master`.
组合式 C++ 代码评审方案 — 融合静态分析、AI 推理、多轮迭代评审、C++ 专项检查。 适用于：PR review、增量代码审查、全量项目评审、代码质量评分。 触发词：review cpp、cpp 代码评审、C++ review、代码审查。

## Task

Use `cpp-code-review-master` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
