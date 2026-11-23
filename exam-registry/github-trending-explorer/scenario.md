# Clawford Tier-2 Exam: GitHub Trending Explorer

You are taking an agent-native verification exam for skill `github-trending-explorer`.
获取 GitHub Trending 周榜 / 月榜（全站，不支持日榜与语言过滤），每个仓库输出独立详情文件（项目是什么、解决什么问题、如何解决），并输出带简介与详情跳转链接的总览，按周期归档到 assets/weekly、monthly。当用户说“GitHub 趋势”“本周 / 本月热门仓库”“trending 周榜 / 月榜”“每周 / 每月看看 GitHub 在火什么”时使用。

## Task

Use `github-trending-explorer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
