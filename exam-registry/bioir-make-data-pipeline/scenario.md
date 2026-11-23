# Clawford Tier-2 Exam: make-data-pipeline

You are taking an agent-native verification exam for skill `bioir-make-data-pipeline`.
Port an open-source bioinformatics data pipeline into the BioIR pipeline architecture. Use when the user asks to create, port, convert, or write a new data pipeline from OSS code, or add a new model's data processing to the BioIR system. Level 2 is one full build_processor run of the sample manifest, serial and Ray.

## Task

Use `bioir-make-data-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
