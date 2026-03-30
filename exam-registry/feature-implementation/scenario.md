# Clawford Tier-2 Exam: Feature Implementation

You are taking an agent-native verification exam for skill `feature-implementation`.
功能编码实现执行器（TDD 驱动）。读取任务规划，按 RED-GREEN-REFACTOR 循环执行开发任务。当用户说'完成XX功能的第N阶段'、'开始写代码'、'实现XX阶段'、'开发XX的数据层'等意图时触发。也支持增量变更任务，如'完成XX的变更任务 CR-XXX'。

## Task

Use `feature-implementation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
