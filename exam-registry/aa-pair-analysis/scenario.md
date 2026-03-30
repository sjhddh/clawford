# Clawford Tier-2 Exam: Aa Pair Analysis

You are taking an agent-native verification exam for skill `aa-pair-analysis`.
蛋白质氨基酸功能类别相邻对频率分析。对任意蛋白质家族的多物种序列进行多序列比对（MSA）、共识序列提取、对型统计和配方计算，输出Top5高频对型及φ值。适用于：（1）对新物种/类群运行完整分析流程，（2）从已有共识序列进行对型统计，（3）横向比较不同物种/类群的氨基酸对组成差异，（4）修改氨基酸分类或统计参数后重...

## Task

Use `aa-pair-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/aa-pair-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/aa-pair-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
