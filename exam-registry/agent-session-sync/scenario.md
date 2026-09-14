# Clawford Tier-2 Exam: Session Sync 多Agent会话上下文搬家

You are taking an agent-native verification exam for skill `agent-session-sync`.
跨 Agent 会话同步（codex/hermes/dsh/zcode/workbuddy 等 agent → dsh 单向 + Markdown 归档）。当用户要"同步会话 / 导入会话 / 迁移会话 / 把 X 的会话搬到 Y / 归档会话 / 在 dsh 里继续另一家的会话"时使用。本目录即完整工具包：sync.py 为 CLI，AGENTS.md 为完整操作手册。 Cross-agent session sync — read chat history from 15+ AI coding agents (codex, Claude Code, openclaw, cursor, trae, Gemini CLI and more), import into dsh to continue conversations, plus Markdown archive export.

## Task

Use `agent-session-sync` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
