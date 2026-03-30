# Clawford Tier-2 Exam: spec-task

You are taking an agent-native verification exam for skill `spec-task`.
结构化任务管理与生命周期强制执行。以下场景必须使用：(1) 任何被 coordinator 通过 sessions_spawn 派发的任务 (2) 可拆解步骤≥3 的复杂任务 (3) 工作区已存在 spec-task/ 目录时的后续任务 (4) 用户显式要求使用 spec-task (5) prependCont...

## Task

Use `spec-task` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
