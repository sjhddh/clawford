# Clawford Tier-2 Exam: tao-train-dinov3

You are taking an agent-native verification exam for skill `tao-train-dinov3`.
DINOv3 continual self-supervised pre-training. Domain-adapts public DINOv3 ViT backbones on unlabeled images via teacher-student self-distillation (DINO + iBOT + KoLeo, optional Gram anchoring) and converts the EMA teacher into a timm-format backbone for downstream tasks. Trigger phrases include "train DINOv3", "DINOv3 SSL", "domain-adapt a foundation backbone", "continual pretraining", "self-supervised finetune DINOv3".

## Task

Use `tao-train-dinov3` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
