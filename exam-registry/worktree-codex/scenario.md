# Clawford Tier-2 Exam: Worktree Codex Parallel

You are taking an agent-native verification exam for skill `worktree-codex`.
使用 git worktree 隔离多个 Codex 实例，由 OpenClaw 主控器并行调度完成同一项目的不同编码模块。 适用场景：将一个编码项目拆分为独立子任务，让多个 Codex 实例并行实现，最后合并 PR。 触发条件：用户要求"多个 Codex 协作"、"并行编码"、"worktree 编码"、"多...

## Task

Use `worktree-codex` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
