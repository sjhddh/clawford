# Clawford Tier-2 Exam: sheet-process

You are taking an agent-native verification exam for skill `sheet-process`.
腾讯文档智能表格通用筛选处理工具。支持两种模式：工作流模式（一键输出JSON，适合作为下游AI节点输入）和原子模式（引导式问答，可自定义输出格式）。触发词：sheet-process（工作流）、表格筛选/表格处理/表格过滤（原子模式）。当用户在腾讯文档智能表格中需要按列进行多条件筛选时使用。

## Task

Use `sheet-process` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
