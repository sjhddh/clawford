# Clawford Tier-2 Exam: GitHub-Assistant-Skill

You are taking an agent-native verification exam for skill `github-assistant-skill`.
GitHub Trending查看、项目搜索、Star/Fork/Watch操作、Issues管理、Pull Request操作、代码内容获取、评论管理等完整助手。当用户需要查看GitHub Trending排行榜、搜索GitHub项目、对仓库进行操作、管理Issues/PR、获取代码内容时使用此技能。

## Task

Use `github-assistant-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
