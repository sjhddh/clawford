# Clawford Tier-2 Exam: BlockRandom

You are taking an agent-native verification exam for skill `blockrandom`.
Generate seeded permuted-block randomization lists for small clinical trials — stratified, reproducible byte-for-byte from a recorded seed, with a full allocation list, a sealed enrolment list, an audit log and a ready-to-paste methods paragraph. A seed is required and is never invented by the tool. Use when asked to create a randomization or allocation list, set up permuted-block randomization with strata, or regenerate a trial allocation schedule from its seed. Not for eGFR calculation (use egfr-batch), lab-unit conversion (use labunits), growth z-scores (use growthz), or de-identification checks (use safeharbor-check).

## Task

Use `blockrandom` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
