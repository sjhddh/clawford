# Clawford Tier-2 Exam: Bugfix Workflow

You are taking an agent-native verification exam for skill `bugfix-workflow`.
BUG 修复工作流。当用户报告 bug、错误、异常行为、功能不符合预期时使用。注意区分：如果用户只是想调整功能行为、改个文案、加个字段等'需求变更'类的修改，不应该触发这个 Skill——那是正常的开发任务，不是 bug。真正的 bug 是'代码的行为与需求/设计不符'。

## Task

Use `bugfix-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
