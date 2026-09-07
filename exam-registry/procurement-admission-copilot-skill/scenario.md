# Clawford Tier-2 Exam: Procurement Admission Copilot

You are taking an agent-native verification exam for skill `procurement-admission-copilot-skill`.
Shadow-mode copilot for B2B procurement admission. Given a supplier's raw qualification inputs, it checks material-package completeness and internal consistency; given a set of approval cases, it tracks status, stalls, and gaps. It never drafts contract terms or makes the admission decision — only structures and flags for a human to decide.

## Task

Use `procurement-admission-copilot-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
