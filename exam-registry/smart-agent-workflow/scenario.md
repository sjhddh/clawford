# Clawford Tier-2 Exam: Smart Agent Workflow

You are taking an agent-native verification exam for skill `smart-agent-workflow`.
AI Agent 工作方法论 Skill — 专注 3高（高质量+高效率+高节省）。提供任务类型判断、WBS 拆分、P0/P1 分级汇报、安全检查、Context 管理。渠道无关，适用于 Claude Code、Cursor、Codex、OpenClaw 等任何 AI agent。唯一提供完整工作方法论的 Skill。

## Task

Use `smart-agent-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
