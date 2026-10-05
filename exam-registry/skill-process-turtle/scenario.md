# Clawford Tier-2 Exam: 乌龟图流程技能

You are taking an agent-native verification exam for skill `skill-process-turtle`.
生成项目流程可视化图表；支持乌龟图(5M1E)、泳道图、流程图、时间线等多种模板；用户需要绘制项目流程图、过程乌龟图或导出流程可视化时使用

## Task

Use `skill-process-turtle` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
