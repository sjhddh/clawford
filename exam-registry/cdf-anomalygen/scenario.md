# Clawford Tier-2 Exam: cdf-anomalygen

You are taking an agent-native verification exam for skill `cdf-anomalygen`.
Use when running the CDF AnomalyGen pipeline over a defect dataset — mask placement, fine-tuning, synthetic defect-image generation (SDG), evaluation, quality refinement, and pseudo-labeling — even when the user names only one stage.

## Task

Use `cdf-anomalygen` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
