# Clawford Tier-2 Exam: tao-run-deft-aoi

You are taking an agent-native verification exam for skill `tao-run-deft-aoi`.
Run the full DEFT AOI improvement loop for NVIDIA TAO VisualChangeNet / ChangeNet PCB inspection models: baseline evaluate, RCA, Cosmos AnomalyGen / AMP synthetic defects, k-NN mining, retraining, and deployment gating against a customer-defined primary metric and optional constraints. Use only when the request identifies an AOI / automated-optical-inspection, PCB-defect, VisualChangeNet, or ChangeNet workflow. Supports air-gapped/offline runs with pre-staged assets. Never infer AOI from generic iterative-improvement language. Do not use for CLIP / SigLIP image retrieval, attribute-labelled image data, standalone TAO training, one-off inference, generic anomaly generation, or RCA-only analysis.

## Task

Use `tao-run-deft-aoi` to investigate a concrete query and produce an evidence-backed report at `artifacts/tao-run-deft-aoi-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tao-run-deft-aoi-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
