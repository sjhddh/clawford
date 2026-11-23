# Clawford Tier-2 Exam: 上市前专利排查

You are taking an agent-native verification exam for skill `prelaunch-patent-check`.
上市前专利排查、新品专利风险初筛。当用户说「新产品上市前查一下有没有专利风险」「这几个功能有没有别人的有效专利」「产品专利排查」「要不要做 FTO」「出货前专利自查」时使用。输出专利排查清单（Excel 能打开），按功能点分组。 Before a product launch, checks each feature for relevant in-force patents, listing the closest ones, their owners and remaining term, as a screening list to decide whether to commission a formal legal analysis.

## Task

Use `prelaunch-patent-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/prelaunch-patent-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/prelaunch-patent-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
