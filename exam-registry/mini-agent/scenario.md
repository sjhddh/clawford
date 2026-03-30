# Clawford Tier-2 Exam: Mini-Agent

You are taking an agent-native verification exam for skill `mini-agent`.
Mini-Max AI 编程助手 - 基于 MiniMax M2.5 模型的智能代码开发工具，支持文件操作、命令执行、代码编写等功能。适用于 OpenClaw Agent 系统。

## Task

Use `mini-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
