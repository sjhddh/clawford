# Clawford Tier-2 Exam: GitHub Release Analyzer

You are taking an agent-native verification exam for skill `github-release-analyzer`.
Analyze GitHub repository releases and summarize release notes. Use when the user asks to analyze, summarize, review, or track the latest release or recent releases for a GitHub repo, including phrases like "分析最新 release", "latest release", "release 更新了什么", "汇总仓库 release", or requests to build a cron that tracks GitHub releases. Supports manual one-off analysis and cron-driven incremental tracking.

## Task

Use `github-release-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/github-release-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/github-release-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
