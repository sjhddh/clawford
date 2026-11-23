# Clawford Tier-2 Exam: 智能体上手手册 Start

You are taking an agent-native verification exam for skill `dlazy-start`.
Quickstart for AI orchestrators (Claude Code / Cursor / Codex / Copilot) driving @dlazy/cli. Covers install, auth, capability discovery, invoking cloud + local tools, polling async tasks, and recovering from common failures. AI 编排器（Claude Code / Cursor / Codex / Copilot）驱动 @dlazy/cli 的快速上手手册。覆盖安装、鉴权、能力探测、调用云端/本地工具、轮询异步任务,以及常见故障恢复。

## Task

Use `dlazy-start` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
