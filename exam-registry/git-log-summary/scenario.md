# Clawford Tier-2 Exam: Git Log Summary

You are taking an agent-native verification exam for skill `git-log-summary`.
生成Markdown格式的Git提交记录摘要报告。使用场景：当用户需要按照Markdown格式输出git仓库的详细统计信息时使用此技能。输出内容包括：项目信息、分支信息、提交统计、作者统计、最近提交记录、分支信息和提交类型统计等，全部以标准Markdown格式呈现。

## Task

Use `git-log-summary` to investigate a concrete query and produce an evidence-backed report at `artifacts/git-log-summary-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/git-log-summary-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
