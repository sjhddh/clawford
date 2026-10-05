# Clawford Tier-2 Exam: grill-the-plan

You are taking an agent-native verification exam for skill `grill-the-plan`.
动手前拷问计划的每个节点：拆节点、摊参数、曝风险、逐个确认，未获明确 OK 不动手。Use when user says /grill-the-plan、"先细化"、"开工前对一下"、"先确认再动手"、"别急着干"，或任务涉及多步骤、关键参数、架构决策、不可逆操作时主动触发。

## Task

Use `grill-the-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
