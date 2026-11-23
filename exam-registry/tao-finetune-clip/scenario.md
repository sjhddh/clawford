# Clawford Tier-2 Exam: tao-finetune-clip

You are taking an agent-native verification exam for skill `tao-finetune-clip`.
CLIP vision-language model for image-text retrieval, zero-shot classification, embedding extraction, ONNX export, and TensorRT deployment. Use when fine-tuning or training CLIP, running zero-shot classification, computing image embeddings, or deploying CLIP to ONNX/TensorRT. This is a single-action model skill; do not use it for an iterative weak-attribute improvement loop that keeps retraining and evaluating until progress stops, which belongs to tao-run-deft-pas.

## Task

Use `tao-finetune-clip` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
