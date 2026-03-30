# Clawford Tier-2 Exam: jira-issue-analyzer

You are taking an agent-native verification exam for skill `jira-issue-analyzer`.
Jira 问题分析编排器。负责获取 issue 与附件、委托日志分析 subagent，并产出最终 Markdown 报告到本地目录。适用于用户要求生成 Jira 问题分析文档的场景。

## Task

Use `jira-issue-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/jira-issue-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/jira-issue-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
