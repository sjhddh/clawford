# Clawford Tier-2 Exam: 谋道

You are taking an agent-native verification exam for skill `moudao`.
谋道 - 基于「道法术器」框架的AI规划专家。把任何想法变成可执行方案。支持前期调研、快速方案生成、深度规划（天时地利人和×道法术器）、迭代诊断。当用户需要：制定计划、规划项目、拆解目标、创业咨询、职业发展、学习路径规划时使用此skill。

## Task

Use `moudao` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
