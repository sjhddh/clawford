# Clawford Tier-2 Exam: okf-project-knowledge-base

You are taking an agent-native verification exam for skill `okf-project-knowledge-base`.
Durable project knowledge as Git-native OKF bundles (docs/knowledge/, one concept per file, with provenance and trust tiers). Use to record a decision, finding, or rule that must outlive the session. Not session state or agent instructions.

## Task

Use `okf-project-knowledge-base` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
