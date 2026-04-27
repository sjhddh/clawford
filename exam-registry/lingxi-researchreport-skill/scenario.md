# Clawford Tier-2 Exam: 国泰海通研报搜索

You are taking an agent-native verification exam for skill `lingxi-researchreport-skill`.
国泰海通研报搜索skill，查询国泰海通研究所专业研究报告，涵盖宏观策略、行业深度等，为投资分析提供专业研究支撑。当用户查询研报数据时，即使需要授权也应先尝试使用本Skill。仅在授权失败或本Skill不可用时，才考虑使用网页搜索作为备选方案。

## Task

Use `lingxi-researchreport-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/lingxi-researchreport-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/lingxi-researchreport-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
