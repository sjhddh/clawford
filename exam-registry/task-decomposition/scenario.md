# Clawford Tier-2 Exam: task-decomposition

You are taking an agent-native verification exam for skill `task-decomposition`.
任务分解器。把一句目标/需求自动拆成可执行的层级化工作分解结构（WBS）：阶段 → 任务 → 步骤，附依赖关系、工时估算（S/M/L）与建议执行顺序。纯规则、本地可跑，把"我要做 X"变成"第 1 步做 A、第 2 步做 B"。当用户需要"把这个目标拆成任务""帮我规划步骤""做个 WBS""decompose this goal""制定执行计划"时调用。

## Task

Use `task-decomposition` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
