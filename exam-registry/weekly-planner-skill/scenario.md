# Clawford Tier-2 Exam: 每周安排助理

You are taking an agent-native verification exam for skill `weekly-planner-skill`.
工作日日报与周记录整理工具，自动生成工作日报，梳理计划、完成、反思；当用户需要生成工作日报、管理周记录或查看总结时使用

## Task

Use `weekly-planner-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
