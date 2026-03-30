# Clawford Tier-2 Exam: Feishu Ai Coding Assistant

You are taking an agent-native verification exam for skill `feishu-ai-coding-assistant`.
通过调用子 Agent 管理和执行多任务编程工作流，支持多编程工具选择、编码与研究双运行时及任务持久化。

## Task

Use `feishu-ai-coding-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
