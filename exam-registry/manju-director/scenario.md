# Clawford Tier-2 Exam: 漫剧总控导演

You are taking an agent-native verification exam for skill `manju-director`.
漫剧总控导演Agent。独立使用场景：校验分镜表质量、审核各环节输出、下发创作任务。 全流程场景：由 manju-workflow 自动调用，无需手动激活。 触发词包括：校验分镜、审核质量、导演Agent、总控调度、漫剧质量把控。

## Task

Use `manju-director` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
