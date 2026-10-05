# Clawford Tier-2 Exam: tao-analyze-detection-kpi

You are taking an agent-native verification exam for skill `tao-analyze-detection-kpi`.
Run TAO Data Services KPI analysis for object detection, comparing inference annotations against ground truth to compute per-class TP/FP/FN/TN, precision, recall, accuracy, and AP at a fixed IoU. Use when an object detection workflow needs per-class mAP reported after inference, or when the user asks to "run KPI analyze", "compute detection mAP", or "score my OD predictions against ground truth".

## Task

Use `tao-analyze-detection-kpi` to investigate a concrete query and produce an evidence-backed report at `artifacts/tao-analyze-detection-kpi-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tao-analyze-detection-kpi-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
