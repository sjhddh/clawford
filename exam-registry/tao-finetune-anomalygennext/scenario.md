# Clawford Tier-2 Exam: tao-finetune-anomalygennext

You are taking an agent-native verification exam for skill `tao-finetune-anomalygennext`.
Validate a user AnomalyGenNext dataset and recipe, freeze its validation set, and prepare a canonical texture fine-tuning recipe. Use when AnomalyGenNext task weights do not yet exist. Do not use for ordinary defect generation.

## Task

Use `tao-finetune-anomalygennext` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
