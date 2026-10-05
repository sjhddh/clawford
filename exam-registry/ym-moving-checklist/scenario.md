# Clawford Tier-2 Exam: ym-moving-checklist

You are taking an agent-native verification exam for skill `ym-moving-checklist`.
按搬家时间倒排生成装箱与交接清单：分区装箱编号、易碎与必带随身、地址变更与水电燃气过户、时间轴与验收项。当用户说「要搬家了」「搬家清单」「搬家怎么安排」时使用。 也适用于「moving checklist」这类说法。

## Task

Use `ym-moving-checklist` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
