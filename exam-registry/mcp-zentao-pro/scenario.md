# Clawford Tier-2 Exam: 禅道MCP agent pro

You are taking an agent-native verification exam for skill `mcp-zentao-pro`.
禅道(ZenTao) MCP大模型能力扩展包。提供跨项目的数据聚合视图、一句话生成任务、无缝报工(Log Effort)、自动状态流转等四组原生能力。

## Task

Use `mcp-zentao-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
