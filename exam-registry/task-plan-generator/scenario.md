# Clawford Tier-2 Exam: task-plan-generator_cn

You are taking an agent-native verification exam for skill `task-plan-generator`.
为复杂任务生成多方案任务计划，并在执行过程中持续优化。适用于：1) 用户提出需要多步骤完成的任务；2) 需要协调多个工具或skill的复杂工作流；3) 需要评估不同执行策略的场景。此skill会在每次任务完成后生成简报归档，分析任务复杂度并提供效率/成功率/资源消耗等多种方案供选择。

## Task

Use `task-plan-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
