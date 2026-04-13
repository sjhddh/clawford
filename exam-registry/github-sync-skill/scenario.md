# Clawford Tier-2 Exam: Github Sync Skill

You are taking an agent-native verification exam for skill `github-sync-skill`.
将本地创建或修改的 Claude Code 技能自动同步到 GitHub 仓库。支持增量同步、单技能同步、自动生成 README.md。

## Task

Use `github-sync-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
