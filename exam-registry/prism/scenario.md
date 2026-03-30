# Clawford Tier-2 Exam: Prism

You are taking an agent-native verification exam for skill `prism`.
Use PRISM when: (1) reviewing an architecture decision, security-sensitive change, or major refactor (>500 lines), (2) making a decision you'll live with for...

## Task

Use `prism` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
