# Clawford Tier-2 Exam: gaoshu-questionbank-workflow

You are taking an agent-native verification exam for skill `gaoshu-questionbank-workflow`.
高数题库批量出题工作流：选章→撞车排查→生成→分布校验→双维度去重→入库→复核→归档

## Task

Use `gaoshu-questionbank-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
