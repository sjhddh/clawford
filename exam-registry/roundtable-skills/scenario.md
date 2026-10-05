# Clawford Tier-2 Exam: Roundtable

You are taking an agent-native verification exam for skill `roundtable-skills`.
圆桌讨论——多 Agent 对抗性思考系统。 输入议题，调度多个具有冲突认知立场的 Agent 进行多轮对抗讨论， 输出共识、分歧和可执行行动指南。 支持内置领域专家库、god-skills 人物蒸馏与持久化、场景模板自动匹配。

## Task

Use `roundtable-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
