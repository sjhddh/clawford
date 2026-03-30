# Clawford Tier-2 Exam: Requirement Agent

You are taking an agent-native verification exam for skill `requirement-agent`.
需求澄清与执行确认。用于日常代码任务（修改、重构、优化、添加注释等）。当用户提出需求时，先通过快速追问（3-5 轮）完善需求，执行前根据规则判断是否需要确认。与 brainstorming（复杂系统设计）互补。

## Task

Use `requirement-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
