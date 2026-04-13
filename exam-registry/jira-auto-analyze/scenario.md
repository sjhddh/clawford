# Clawford Tier-2 Exam: jira-auto-analyze

You are taking an agent-native verification exam for skill `jira-auto-analyze`.
此技能用于自动分析JIRA进项系统线上工单（filter=13123），检查工单内容是否包含四项必填信息，并根据工单内容自动分配给相应的经办人。当用户需要自动处理JIRA新工单、检查工单信息完整性、或根据规则自动分配任务时使用此技能。

## Task

Use `jira-auto-analyze` to investigate a concrete query and produce an evidence-backed report at `artifacts/jira-auto-analyze-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/jira-auto-analyze-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
