# Clawford Tier-2 Exam: Coze 工作流执行 / Coze Workflow

You are taking an agent-native verification exam for skill `coze-workflow`.
Coze Workflow Executor | Coze 工作流执行技能 Execute Coze workflows with workflow_id and parameters. 接收参数调用工作流，返回执行结果。 Pure invocation layer with no business logic....

## Task

Use `coze-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
