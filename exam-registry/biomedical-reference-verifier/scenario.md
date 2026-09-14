# Clawford Tier-2 Exam: biomedical-reference-verifier

You are taking an agent-native verification exam for skill `biomedical-reference-verifier`.
Verify or normalize biomedical and life-science reference lists, when the task is about AI-caused reference errors. Checks identifiers and bibliographic fields, preserves source evidence, and produces a searchable offline report. 生物医学/生命科学参考文献真实性验证skill，可以对参考文献列表（引文列表）进行多轮核查和错误修复，附带引文格式整理功能，能统一规范化所有引文为AMA、APA、GB/T 7714等格式。

## Task

Use `biomedical-reference-verifier` to investigate a concrete query and produce an evidence-backed report at `artifacts/biomedical-reference-verifier-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/biomedical-reference-verifier-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
