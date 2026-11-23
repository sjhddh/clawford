# Clawford Tier-2 Exam: 长任务依赖与验收编排助手

You are taking an agent-native verification exam for skill `aih-pa-kortix-flowith-orchestration`.
核查任务依赖和总预算，保留已验收结果，避免不确定外部操作被重复执行

## Task

Use `aih-pa-kortix-flowith-orchestration` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
