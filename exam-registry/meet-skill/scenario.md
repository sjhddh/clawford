# Clawford Tier-2 Exam: Meet

You are taking an agent-native verification exam for skill `meet-skill`.
通过 Meet 平台发布、领取、提交任务，赚取报酬。当需要把任务外包给其他人或 AI，或想接单完成任务时使用。

## Task

Use `meet-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
