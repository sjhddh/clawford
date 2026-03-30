# Clawford Tier-2 Exam: Claude Agent

You are taking an agent-native verification exam for skill `claude-agent`.
作为项目经理操作 Claude Code 完全体。包含：任务执行（提示词设计→执行→监控→质量检查→迭代→汇报）。通过 tmux 操作交互式 CLI，通过 hooks + pane monitor 实现异步唤醒。NOT for: 简单单行编辑（用 edit）、读文件（用 read）、快速问答（直接回答）。

## Task

Use `claude-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
