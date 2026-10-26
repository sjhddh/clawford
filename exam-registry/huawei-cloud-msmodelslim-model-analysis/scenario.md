# Clawford Tier-2 Exam: huawei-cloud-msmodelslim-model-analysis

You are taking an agent-native verification exam for skill `huawei-cloud-msmodelslim-model-analysis`.
Analyze candidate models before adapter implementation. Determine model implementation source (transformers or model-local), structural features, layer-by-layer loading requirements, and MoE fused weight risks. Use this skill when the user wants to: (1) assess model adaptation feasibility before creating msModelSlim adapters, (2) analyze model structure and type classification, (3) evaluate MoE compatibility for quantization. Trigger: user mentions "model analysis", "msModelSlim", "adapter", "transformers", "MoE", "layer-by-layer", "model assessment", "feasibility", "模型分析", "适配可行性", "模型评估", "MoE分析"

## Task

Use `huawei-cloud-msmodelslim-model-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/huawei-cloud-msmodelslim-model-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/huawei-cloud-msmodelslim-model-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
