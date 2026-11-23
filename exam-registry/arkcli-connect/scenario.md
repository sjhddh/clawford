# Clawford Tier-2 Exam: arkcli-connect

You are taking an agent-native verification exam for skill `arkcli-connect`.
arkcli +connect：将 arkcli 内嵌的 AI skills 安装到本机检测到的所有 AI Agent 中，支持安装、列出已支持 agent、卸载。当用户需要将 arkcli 能力同步到 Claude Code 等本地 agent 时使用。

## Task

Use `arkcli-connect` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
