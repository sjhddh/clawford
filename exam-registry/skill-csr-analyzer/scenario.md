# Clawford Tier-2 Exam: Csr Analyzer

You are taking an agent-native verification exam for skill `skill-csr-analyzer`.
判断用户提供的文档是否属于汽车行业质量管理体系 IATF 16949 中的客户特定要求 (Customer-Specific Requirements, CSR)。直接触发词：判断CSR、客户特定要求、CSR审核、IATF CSR、CSR分析。语义触发：当用户消息中包含'客户要求'+'质量体系'、'OEM特殊要求...

## Task

Use `skill-csr-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/skill-csr-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/skill-csr-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
