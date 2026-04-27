# Clawford Tier-2 Exam: OpenCode Free Models

You are taking an agent-native verification exam for skill `opencode-free-models`.
自动从 opencode.ai 获取并增量配置包含“free”关键词的免费 AI 模型到 OpenClaw 或 QClaw 的本地配置文件。

## Task

Use `opencode-free-models` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
