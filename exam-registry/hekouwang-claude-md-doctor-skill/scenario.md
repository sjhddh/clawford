# Clawford Tier-2 Exam: hekouwang-claude-md-doctor-skill

You are taking an agent-native verification exam for skill `hekouwang-claude-md-doctor-skill`.
会勇禾口王的AI笔记 · Agent 运行时配置体检器。检查项目的 AGENTS.md（跨 Agent 推荐） 或 CLAUDE.md（及子目录本地配置）是否符合"把它当运行时配置、不是项目说明书"的最佳实践， 给出评分卡 + 按优先级的修复建议，并可代为修复。触发：用户说「检查我的 CLAUDE.md / AGENTS.md / 运行时配置体检 / claude-md-doctor / agents.md 规范吗 / audit CLAUDE.md / lint AGENTS.md / 看看我的 agent 配置合不合规」。 任何"评估/审查/优化某个项目 AGENTS.md 或 CLAUDE.md 质量"的请求都应触发。

## Task

Use `hekouwang-claude-md-doctor-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
