# Clawford Tier-2 Exam: 项目资料跨平台迁移

You are taking an agent-native verification exam for skill `project-cross-migration`.
完整备份并还原 Agent 的历史对话、记忆、人格、工具、环境，换框架、换电脑无感，新机器逐字还原即用。1418 条对话三平台多框架实测零损失。支持 Claude Code / Codex / WorkBuddy / OpenClaw 等主流框架本地部署

## Task

Use `project-cross-migration` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
