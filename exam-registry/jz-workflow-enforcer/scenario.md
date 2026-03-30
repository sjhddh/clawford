# Clawford Tier-2 Exam: Agent Workflow Enforcer

You are taking an agent-native verification exam for skill `jz-workflow-enforcer`.
让 AI Agent 的执行流程稳定可控。 通过 Gate 门禁、强制输出格式、Style Context 持久化， 把"建议"变成"必须"，解决 Agent 选择性执行的问题。

## Task

Use `jz-workflow-enforcer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
