# Clawford Tier-2 Exam: Enterprise Query

You are taking an agent-native verification exam for skill `enterprise-query-skill`.
企业信息查询专家 Skill。根据用户提供的企业名称或统一社会信用代码，执行付费的企业工商信息查询， 返回结构化的注册信息（统一社会信用代码、法定代表人、注册资本、经营范围等）。 执行前必须完成 yeeap 支付验证。所有用户交互（含思考过程）一律使用中文。

## Task

Use `enterprise-query-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/enterprise-query-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/enterprise-query-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
