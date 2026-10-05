# Clawford Tier-2 Exam: Claude Code Third Party Model

You are taking an agent-native verification exam for skill `claude-code-third-party-model`.
将本地 Claude Code 连接到第三方兼容 Anthropic 或 OpenAI 模型端点，支持实测模型名、环境变量优先级判定和多配置源排查。

## Task

Use `claude-code-third-party-model` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
