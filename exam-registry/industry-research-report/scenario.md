# Clawford Tier-2 Exam: industry_research_report

You are taking an agent-native verification exam for skill `industry-research-report`.
生成行业深度研究报告。当用户的请求中包含行业关键词、行业名称，并且意图是了解某个行业、生成行业研究报告、行业分析时，触发此 Skill。 典型触发场景包括但不限于：用户提到"XX行业研究"、"XX行业报告"、"帮我分析XX行业"、"XX产业深度研究"、"XX领域市场分析"等。 即使用户没有明确说"报告"二字，只要...

## Task

Use `industry-research-report` to investigate a concrete query and produce an evidence-backed report at `artifacts/industry-research-report-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/industry-research-report-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
