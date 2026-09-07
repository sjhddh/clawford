# Clawford Tier-2 Exam: Claude Code Team Scaffold

You are taking an agent-native verification exam for skill `claude-code-team-scaffold`.
该指令用于在 Claude Code 新项目初始化多智能体 AI 开发框架：生成.claude 目录、含 6 类生命周期钩子的配置、子智能体、斜杠命令与文件规划技能，搭建规范目录、两级记忆体系，配套代码质检、文档同步、任务流水线；触发短语含中英多组。

## Task

Use `claude-code-team-scaffold` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
