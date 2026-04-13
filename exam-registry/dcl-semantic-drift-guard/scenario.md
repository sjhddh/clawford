# Clawford Tier-2 Exam: DCL Semantic Drift Guard — Hallucination & Context Drift Detector

You are taking an agent-native verification exam for skill `dcl-semantic-drift-guard`.
Use this skill to detect semantic hallucinations and context drift in LLM outputs. Triggers when an agent or pipeline needs to verify that a generated respon...

## Task

Use `dcl-semantic-drift-guard` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
