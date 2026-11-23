# Clawford Tier-2 Exam: GitHub Latest Hot Repo Explorer

You are taking an agent-native verification exam for skill `github-latest-hot-repo-explorer`.
从 GitHub 全站搜索最近创建、star 大于 5000 的热门仓库，严格选取 star 最多且未输出过的一个，默认 1 个月窗口，无结果时自动扩窗，最晚回溯到 2023-03-14（GPT-4 发布日）。

## Task

Use `github-latest-hot-repo-explorer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
