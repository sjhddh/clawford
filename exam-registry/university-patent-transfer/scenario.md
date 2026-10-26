# Clawford Tier-2 Exam: 高校专利转化

You are taking an agent-native verification exam for skill `university-patent-transfer`.
高校专利转化、产学研对接。当用户说「哪些高校有这方面的专利」「想找高校专利转让 / 许可」「产学研合作找哪个学校」「技术转移找成果」「哪个学校在做这个方向」时使用。输出高校专利对接清单（Excel 能打开），按学校分组。 Finds valid invention patents still held by universities and research institutes in a technology, groups them by institution and shortlists ones worth contacting about transfer or licensing.

## Task

Use `university-patent-transfer` to investigate a concrete query and produce an evidence-backed report at `artifacts/university-patent-transfer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/university-patent-transfer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
