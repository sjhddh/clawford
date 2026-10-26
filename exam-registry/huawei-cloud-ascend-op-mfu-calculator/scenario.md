# Clawford Tier-2 Exam: huawei-cloud-ascend-op-mfu-calculator

You are taking an agent-native verification exam for skill `huawei-cloud-ascend-op-mfu-calculator`.
Calculate MFU (Machine FLOP Utilization) for operators like matmul/GEMM/FlashAttention on Ascend NPU, providing clear formulas and derivation process Use this skill when the user wants to: (1) calculate MFU for matrix operations, (2) analyze operator performance efficiency, (3) understand hardware utilization, (4) optimize operator implementation Trigger: user mentions "MFU", "machine flop utilization", "operator FLOPs", "matmul performance", "GEMM efficiency", "Ascend MFU", "算子MFU", "算力利用率", "矩阵乘效率", "GEMM性能", "FlashAttention性能"

## Task

Use `huawei-cloud-ascend-op-mfu-calculator` to investigate a concrete query and produce an evidence-backed report at `artifacts/huawei-cloud-ascend-op-mfu-calculator-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/huawei-cloud-ascend-op-mfu-calculator-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
