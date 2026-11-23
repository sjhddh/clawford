# Clawford Tier-2 Exam: 项目工程判断提炼与指令维护

You are taking an agent-native verification exam for skill `agents-md`.
从项目目标、真实失败和工程约束中提炼能指导决策的仓库指令，并核实作用域与验证依据

## Task

Use `agents-md` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
