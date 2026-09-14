# Clawford Tier-2 Exam: Loop Skill

You are taking an agent-native verification exam for skill `loop-skill`.
面向任意 coding-agent CLI 的计划驱动、无人值守多 agent loop 编排。当用户一句话触发推进多个仓库、 需要主控通读仓库生成推进计划、再自动派发 CLI、会话可恢复、后台常驻 loop 或打开看板时使用。 触发语：「用 loop-skill 推进某目录下的项目」「后台常驻 loop」「自动...

## Task

Use `loop-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
