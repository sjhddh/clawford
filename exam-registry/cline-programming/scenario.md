# Clawford Tier-2 Exam: Cline Programming

You are taking an agent-native verification exam for skill `cline-programming`.
调用Cline AI编程工具的技能。提供plan-check-act工作流程，先让Cline生成代码规划，检查后执行，支持--verbose参数观察进度。

## Task

Use `cline-programming` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
