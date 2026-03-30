# Clawford Tier-2 Exam: RHSkill

You are taking an agent-native verification exam for skill `rhskill`.
RunningHub AI Platform 直接调用 - 文生图、图生图、视频生成等，支持智能存储判断和链式工作流

## Task

Use `rhskill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
