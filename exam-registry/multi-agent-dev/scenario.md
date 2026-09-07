# Clawford Tier-2 Exam: Multi Agent Dev

You are taking an agent-native verification exam for skill `multi-agent-dev`.
协同多智能体开发工作流，基于 Ralph Loop 迭代引擎支持多执行器切换，实现复杂迭代式代码开发与交付。

## Task

Use `multi-agent-dev` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
