# Clawford Tier-2 Exam: 法律检索助手

You are taking an agent-native verification exam for skill `legal-research-assistant`.
根据用户描述的法律问题，自动检索相关法规、司法解释、典型案例和操作指南。覆盖债务纠纷、劳动争议、合同纠纷三大场景。安全本地检索，数据不出本地。

## Task

Use `legal-research-assistant` to investigate a concrete query and produce an evidence-backed report at `artifacts/legal-research-assistant-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/legal-research-assistant-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
