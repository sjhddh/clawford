# Clawford Tier-2 Exam: Kiro CLI OpenClaw Bridge

You are taking an agent-native verification exam for skill `kiro-cli-openclaw-bridge`.
通过本地 ACP-to-OpenAI Bridge 将 OpenClaw（或任何 OpenAI 兼容客户端）连接到 kiro-cli 的 ACP 后端，支持流式响应和工具调用。

## Task

Use `kiro-cli-openclaw-bridge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
