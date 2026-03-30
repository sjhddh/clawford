# Clawford Tier-2 Exam: 克隆龙虾

You are taking an agent-native verification exam for skill `clone-lobster`.
OpenClaw/CatPaw 配置与上下文自动备份恢复工具。在使用 OpenClaw 过程中自动保留配置变更、工作区文件、对话上下文、已安装 Skills 和系统改动到 Git 仓库。 触发场景：(1) 用户要求备份/保存当前配置 (2) 用户要求恢复之前的配置 (3) 对话中产生了重要的配置变更、skill...

## Task

Use `clone-lobster` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
