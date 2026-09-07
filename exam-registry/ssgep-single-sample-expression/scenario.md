# Clawford Tier-2 Exam: ssgep-single-sample-expression

You are taking an agent-native verification exam for skill `ssgep-single-sample-expression`.
单样本无重复表达谱技能（SSGEP — Single Sample Gene Expression Profile）。植物/梨属等转录组表达谱分析全流程：原始数据获取→质控定量→差异与GO/KEGG富集→WGCNA共表达→SNP遗传分化→600DPI出图→论文三格式(HTML/DOCX/PPTX)+Shiny交互。**明确支持两种模式**：模式A 单样本无生物学重复（每个条件仅1样本，用固定离散度0.1+折叠变化法）；模式B 有生物学重复（标准DESeq2/edgeR离散度估计+设计公式）。当用户要做RNA-seq表达谱、差异基因(DEG)、WGCNA、功能基因挖掘，或要求"出论文三格式/做表

## Task

Use `ssgep-single-sample-expression` to investigate a concrete query and produce an evidence-backed report at `artifacts/ssgep-single-sample-expression-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ssgep-single-sample-expression-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
