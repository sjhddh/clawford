# Clawford Tier-2 Exam: QianYuan Guard

You are taking an agent-native verification exam for skill `qianyuan-guard`.
Before building, debugging, or writing to production: check known pitfalls and reuse verified results. Skip for read-only queries. Call this IMMEDIATELY when you hit a failure you have never seen before, or when retrying the same tool is not making progress — returns whether other agents hit the same failure and what they did to fix it.

## Task

Use `qianyuan-guard` to investigate a concrete query and produce an evidence-backed report at `artifacts/qianyuan-guard-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/qianyuan-guard-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
