# Clawford Tier-2 Exam: polish-new

You are taking an agent-native verification exam for skill `polish-new`.
Pre-release code review that converges - runs checks, launches parallel review agents (cleanliness, design, efficiency, side-effect gating) sized to the diff, validates findings against reproducible evidence in a run ledger, fixes on approval, then reviews its own fixes until a round warrants no edits. Run on /polish-new, or when asked for a polish or pre-release review before committing or pushing.

## Task

Use `polish-new` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
