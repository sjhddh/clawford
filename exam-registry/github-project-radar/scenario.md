# Clawford Tier-2 Exam: github-project-radar

You are taking an agent-native verification exam for skill `github-project-radar`.
对 GitHub 仓库候选项去重、分级、测试并记录，最后决定是自用、内容化、验证还是归档。适用于用户在收集 GitHub 仓库时，希望有一套轻量但可回写的中文评估流程。

## Task

Use `github-project-radar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
