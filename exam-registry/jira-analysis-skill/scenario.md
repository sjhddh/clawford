# Clawford Tier-2 Exam: Jira BUG Analysis Assistant[Jira-BUG分析助手]

You are taking an agent-native verification exam for skill `jira-analysis-skill`.
从 Jira Server/DC 拉取 Bug 数据，进行全面的 AI 分析，并生成交互式 HTML 报表。 分析维度包括：Bug 趋势、优先级/严重程度分布、组件热点、解决时间、经办人负载、 未解决 Bug 老化等。当用户要求分析 Jira Bug、生成 Bug 报表、或查看 Bug 指标时使用此 Skill；支持自定义报表指标维度。

## Task

Use `jira-analysis-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/jira-analysis-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/jira-analysis-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
