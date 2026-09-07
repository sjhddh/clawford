# Clawford Tier-2 Exam: nv-segment-ct-finetune

You are taking an agent-native verification exam for skill `nv-segment-ct-finetune`.
Runs standard or fixed-channel softmax finetuning of NV-Segment-CT VISTA3D on CT NIfTI image/label datasets, with optional MONAI-native MLflow tracking and checkpoint evidence. Uses softmax for predefined, mutually exclusive classes; keeps the standard workflow when point prompts or runtime-variable classes are needed. Not for clinical validation.

## Task

Use `nv-segment-ct-finetune` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
