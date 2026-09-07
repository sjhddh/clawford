# Clawford Tier-2 Exam: Doubao Assistant

You are taking an agent-native verification exam for skill `doubao-assistant`.
全功能豆包大模型集成平台，支持流式响应、函数调用、知识库增强和批量管理，适合团队和生产环境自动化应用。

## Task

Use `doubao-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
