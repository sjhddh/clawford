# Clawford Tier-2 Exam: Multi-Agent Orca

You are taking an agent-native verification exam for skill `multi-agent-orca`.
编排两个以上边界独立的本地 worker，使用 Orca Run/Task/Dispatch、独立 worktree/session 或 tmux 回退，由 PM 负责拆解、派发、巡检、429 停滞恢复、独立验收、PR 收口与临时资源清理；也用于用户明确要求“并行推进”“多个 worker”“PM 总控”“Wave Autopilot”或防止 PM 直接实现逃逸。不要用于单个短任务、纯状态同步，或仅需 Git 分支、提交、PR、merge 规则的工作。

## Task

Use `multi-agent-orca` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
