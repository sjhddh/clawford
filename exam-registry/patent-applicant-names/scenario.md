# Clawford Tier-2 Exam: 专利申请人查询

You are taking an agent-native verification exam for skill `patent-applicant-names`.
专利申请人查询、公司专利名称写法。当用户说「这家公司在专利里叫什么」「查全一家公司的专利要写哪些名字」「子公司的专利也要算」「英文申请人名称」「为什么我查到的专利数比实际少」时使用。输出申请人名称表（Excel 能打开）和一条完整的申请人检索式。 Finds every name a company uses on patents, including subsidiaries, full- and half-width brackets, English case variants and former names, with counts, and builds one complete applicant query.

## Task

Use `patent-applicant-names` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-applicant-names-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-applicant-names-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
