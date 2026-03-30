# Clawford Tier-2 Exam: Claude Code Connector

You are taking an agent-native verification exam for skill `claude-code-connector`.
通过 ACP 桥接调用 Claude Code。 **触发词：** "调用 Claude"、"让 Claude 处理"、"claude code" **使用方式：** ``` 调用 Claude Code 分析这个文件

## Task

Use `claude-code-connector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
