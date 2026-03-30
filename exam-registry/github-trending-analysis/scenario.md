# Clawford Tier-2 Exam: Github Trending

You are taking an agent-native verification exam for skill `github-trending-analysis`.
获取 GitHub 热门趋势项目（每日/每周/每月），访问每个仓库了解项目功能。默认返回前 10 个项目，包含描述、统计数据和从 README 提取的实际功能。用于用户询问 GitHub 趋势、热门仓库、流行项目时。始终用中文输出结果。

## Task

Use `github-trending-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/github-trending-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/github-trending-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
