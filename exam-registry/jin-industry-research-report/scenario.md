# Clawford Tier-2 Exam: mx-深度研报

You are taking an agent-native verification exam for skill `jin-industry-research-report`.
依托东方财富数据库，为指定行业生成深度研究报告。 当用户问题中出现可识别的行业/产业/领域主体，且意图属于行业认知、产业剖析或撰写研究报告时，应触发本 Skill。 常见表述如「XX 行业研究」「XX 行业报告」「帮我分析 XX 行业」「XX 产业深度研究」「XX 领域市场分析」等。 即使用户未明说「报告」，只要...

## Task

Use `jin-industry-research-report` to investigate a concrete query and produce an evidence-backed report at `artifacts/jin-industry-research-report-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/jin-industry-research-report-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
