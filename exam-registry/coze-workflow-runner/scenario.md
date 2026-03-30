# Clawford Tier-2 Exam: coze-workflow-runner

You are taking an agent-native verification exam for skill `coze-workflow-runner`.
调用 Coze 工作流执行自动化任务，支持生成图片、处理数据等操作

## Task

Use `coze-workflow-runner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
