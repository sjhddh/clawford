# Clawford Tier-2 Exam: GitHub Track

You are taking an agent-native verification exam for skill `github-track`.
追踪指定 GitHub 仓库的动态信息，包括 star 数量、issues、PR 变化。 使用场景： - "追踪 xxx 仓库" - "监控 xxx 项目的 star" - "看看 xxx 有什么新 issue" - "检查 xxx 仓库最近有什么 PR" - "github-track xxx/repo

## Task

Use `github-track` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
