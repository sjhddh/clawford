# Clawford Tier-2 Exam: 需求调度官

You are taking an agent-native verification exam for skill `wdp-prd-zh`.
基于 superpowers 的需求管理技能：随时 brainstorm 新需求存为卡片，按依赖/冲突自动计算调度，确认后派后台子代理在隔离worktree 并行开发（计划→TDD→验证→验收），主会话不被阻塞。数据存用户全局目录，重装不丢。

## Task

Use `wdp-prd-zh` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
