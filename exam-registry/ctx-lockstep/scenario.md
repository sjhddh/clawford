# Clawford Tier-2 Exam: Ctx-Lockstep

You are taking an agent-native verification exam for skill `ctx-lockstep`.
管理 git/非 git 项目的长期上下文与断点恢复。触发场景：继续/恢复之前的项目、提交代码后更新项目进度、会话结束前保存项目状态、接手或纳管一个已有项目、为长期推进的任务建立项目档案。Manage long-term project context and session-resume checkpoints for git and non-git projects. Use when resuming a project, updating progress after commits, saving state before ending a session, adopting an existing project, or archiving a long-running task.

## Task

Use `ctx-lockstep` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
