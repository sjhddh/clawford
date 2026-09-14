# Clawford Tier-2 Exam: ML Run Provenance

You are taking an agent-native verification exam for skill `ml-run-provenance`.
Design or audit self-describing ML run metadata attached at initialization, including intent, code and data identity, resume lineage, and evidence limits. Use when wiring a tracker, introducing a run naming pattern, or investigating why a run exists.

## Task

Use `ml-run-provenance` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
