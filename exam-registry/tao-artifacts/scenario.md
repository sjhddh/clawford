# Clawford Tier-2 Exam: tao-artifacts

You are taking an agent-native verification exam for skill `tao-artifacts`.
The contract home for TAO's SDK-free execution pipeline — authoritative JSON Schemas for the four typed artifacts (spec-bundle, job-record, results_dir layout, best_rec) plus the fixed job-status vocabulary and the nested-not-dotted spec rule. Use when authoring or validating a spec-bundle before submit, writing or reading a .tao/jobs job-record, resolving where results land, or consuming AutoML's best_rec.json. Trigger phrases include "validate the spec bundle", "job record schema", "status vocabulary", "results_dir layout", "best_rec schema".

## Task

Use `tao-artifacts` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
