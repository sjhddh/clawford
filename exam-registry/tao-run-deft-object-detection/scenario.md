# Clawford Tier-2 Exam: tao-run-deft-object-detection

You are taking an agent-native verification exam for skill `tao-run-deft-object-detection`.
Run the full DEFT smart-data-augmentation loop for NVIDIA TAO Grounding DINO object detection: zero-shot baseline inference, KPI analysis, per-class gap analysis, SigLIP embedding of weak images, unique-neighbor mining against a source pool, ODVG dataset staging, and retraining — repeated for a fixed number of iterations. Also prepares the source pool the loop mines from, as a separate run: Co-DETR pseudo-labeling, folding to the target classes, KITTI→COCO→ODVG conversion, and embedding. Use for prompts like "run the DEFT OD loop", "run smart data augmentation for grounding dino", "mine and retrain my detection model", "improve OD mAP with gap analysis and mining", "prep the source pool", or "pseudo-label my unlabeled images for mining"; do not use for standalone TAO training, one-off inference, or gap analysis alone.

## Task

Use `tao-run-deft-object-detection` to investigate a concrete query and produce an evidence-backed report at `artifacts/tao-run-deft-object-detection-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tao-run-deft-object-detection-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
