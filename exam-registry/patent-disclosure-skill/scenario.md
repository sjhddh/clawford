# Clawford Tier-2 Exam: 中国专利.Skill

You are taking an agent-native verification exam for skill `patent-disclosure-skill`.
通用中国专利挖掘发现与交底书生成全流程：扫描项目文档挖掘专利点、讨论融合、基于脱敏模版生成技术交底书、联网查新、生成后自检含逻辑闭环与公式参数一致性。| Patent mining, disclosure drafting, prior-art search, and consistency self-check.

## Task

Use `patent-disclosure-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-disclosure-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-disclosure-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
