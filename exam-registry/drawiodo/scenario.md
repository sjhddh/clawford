# Clawford Tier-2 Exam: drawiodo

You are taking an agent-native verification exam for skill `drawiodo`.
draw.io 自动做图 Skill。当用户要求画图、生成图表、做架构图、流程图、UML、ER 图、时序图、思维导图等时触发。生成 .drawio 文件并用 draw.io 打开。支持思考-确认-迭代-版本回溯的完整工作流，8 个 Hook Point 安全校验。

## Task

Use `drawiodo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
