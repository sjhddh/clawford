# Clawford Tier-2 Exam: mab-fto-check

You are taking an agent-native verification exam for skill `mab-fto-check`.
单克隆抗体（mAb）药物专利自由实施（FTO）分析。基于智慧芽专利数据库（PatSnap）+ 序列比对（ls_sequence_alignment）+ 化学结构检索（ls_structure_search），执行9模块并行检索+M1.5修饰检索（含中文专项检索），遵循全面覆盖原则+等同原则，输出HTML格式FTO报告（七章标准结构）。

## Task

Use `mab-fto-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/mab-fto-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/mab-fto-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
