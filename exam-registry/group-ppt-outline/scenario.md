# Clawford Tier-2 Exam: 汇报PPT助手

You are taking an agent-native verification exam for skill `group-ppt-outline`.
规划并制作课程汇报、工作汇报、项目汇报、答辩等 PPT。根据主题、时长、人员分工和参考资料，先生成完整页面框架、章节分配与逐页讲稿要点，待用户确认后，再按指定主题和视觉风格生成 PPT 文件。

## Task

Use `group-ppt-outline` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
