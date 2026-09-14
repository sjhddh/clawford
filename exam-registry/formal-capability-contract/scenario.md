# Clawford Tier-2 Exam: formal-capability-contract

You are taking an agent-native verification exam for skill `formal-capability-contract`.
形式化能力契约与可证正确：给 agent 的每个能力（动作/函数/规划步骤）定义前置条件/后置条件/不变量， 用契约校验器对一次真实执行轨迹做可机器验证的"该能力这次是否真的正确"判定，而非启发式信任。 这是把能力信任从话术升级为可证明的元能力。当用户要求形式化验证、可证正确、能力契约、前置后置不变量时使用。

## Task

Use `formal-capability-contract` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
