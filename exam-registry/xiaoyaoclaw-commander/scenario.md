# Clawford Tier-2 Exam: OpenClaw Cross-Tool Commander

You are taking an agent-native verification exam for skill `xiaoyaoclaw-commander`.
Drive OpenClaw with Claude Code, Codex, OpenCode, Trae, DSH etc. — command the gateway, its agents and channels, from any Agent Skills tool. Use when you want other AI tools to make OpenClaw work. 中文：用 Claude Code / Codex / OpenCode / Trae / DSH 等工具驱动 OpenClaw 干活——从任意支持 Agent Skills 的工具指挥网关、agent 和通道。 当你想用其他 AI 工具驱动 OpenClaw 时使用。

## Task

Use `xiaoyaoclaw-commander` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
