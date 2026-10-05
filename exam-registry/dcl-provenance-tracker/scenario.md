# Clawford Tier-2 Exam: DCL Provenance Tracker — Supply Chain & Version Drift Verifier

You are taking an agent-native verification exam for skill `dcl-provenance-tracker`.
Verify the integrity and version history of any ClawHub skill after an update. Compares two versions of a skill side-by-side, detects suspicious drift across 30+ known supply chain attack patterns, and returns a deterministic DCL provenance proof. 100% instruction-only for the diff itself...

## Task

Use `dcl-provenance-tracker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
