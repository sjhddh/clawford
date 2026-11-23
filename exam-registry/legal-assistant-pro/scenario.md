# Clawford Tier-2 Exam: Legal Doc Reviewer

You are taking an agent-native verification exam for skill `legal-assistant-pro`.
提供NDA审查、合同版本对比、法律引文核验、会议简报生成及状态报告，提升法律文件处理效率和风险识别能力。

## Task

Use `legal-assistant-pro` to investigate a concrete query and produce an evidence-backed report at `artifacts/legal-assistant-pro-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/legal-assistant-pro-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
