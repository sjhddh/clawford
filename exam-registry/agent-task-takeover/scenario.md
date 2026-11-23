# Clawford Tier-2 Exam: agent-task-takeover

You are taking an agent-native verification exam for skill `agent-task-takeover`.
接管、理解或交接另一个 AI 编码 agent 的任务/对话（跨 agent 全局可用，CLI 与 Electron 桌面 agent 均可，不依赖任何终端复用器）。Use whenever the user asks to take over, resume, review, read, or summarize another agent's conversation or task — e.g. "zcode接管opencode对话", "接管 AP Research", "take over the codex session", "opencode接管workbuddy任务", "hand off this task to another agent", "看看另一个 agent 做了什么" — and also when the user asks to prepare the current task for handoff to a different agent. Covers locating foreign session stores (opencode SQLite, ZCode/Codex/Claude/Gemini CLI transcripts, Cursor/Trae/VS Code-family state.vscdb and chatSessions), safely reading and redacting transcripts, reconstructing task state from artifacts when no usable transcript exists, verifying it on disk, and writing takeover handoffs.

## Task

Use `agent-task-takeover` to investigate a concrete query and produce an evidence-backed report at `artifacts/agent-task-takeover-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/agent-task-takeover-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
