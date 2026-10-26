# Clawford Tier-2 Exam: harness-skill-generator

You are taking an agent-native verification exam for skill `harness-skill-generator`.
引导用户从 0 构建一个基于 Harness 工程的 Skill。适用于具有一定复杂度的任务场景(多阶段、多分支、需要质检、需要状态持久化)。不适用于简单的单步任务或纯 prompt 优化。触发词:'创建 Skill'、'新建 Skill'、'做一个 Skill'、'构建 Skill'、'skill generator'、'harness skill'。

## Task

Use `harness-skill-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
