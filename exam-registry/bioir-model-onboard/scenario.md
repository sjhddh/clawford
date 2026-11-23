# Clawford Tier-2 Exam: model-onboard

You are taking an agent-native verification exam for skill `bioir-model-onboard`.
Implement an upstream pretrained model natively in BioIR using its optimized components, with checkpoint conversion and numerical validation. Use when adding a new model or architecture to BioIR; includes data pipeline integration when requested.

## Task

Use `bioir-model-onboard` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
