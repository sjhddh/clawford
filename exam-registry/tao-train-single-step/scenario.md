# Clawford Tier-2 Exam: tao-train-single-step

You are taking an agent-native verification exam for skill `tao-train-single-step`.
Standard single-step train/eval/export workflow for any TAO model. Use when training a TAO model on a dataset without iterative data augmentation, AutoML, or DEFT loops. Trigger phrases include "single train run", "train then evaluate then export", "plain TAO training", "normal training", "no AutoML", "skip the loop". Routes through the per-model SKILL.md for action specifics and through `tao-launch-workflow` for platform/credentials/dataset intake.

## Task

Use `tao-train-single-step` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
