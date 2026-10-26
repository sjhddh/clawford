# Clawford Tier-2 Exam: thought-flow

You are taking an agent-native verification exam for skill `thought-flow`.
The 8-stage collaboration loop for working with the user: INTENT, CONSTRAINTS, PROPOSE, PRESS, PRACTICE, INVESTIGATE, CODIFY, BOUNDARY-CHECK. Use when starting a new task (state intent and constraints up front), when proposing a plan (include options + a recommendation), when the user pushes back on a proposal, when something fails or looks broken and needs investigation, or when deciding whether to codify knowledge into an AGENTS.md rule or a SKILL.md procedure.

## Task

Use `thought-flow` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
