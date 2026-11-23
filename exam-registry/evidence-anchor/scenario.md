# Clawford Tier-2 Exam: evidence-anchor

You are taking an agent-native verification exam for skill `evidence-anchor`.
Use when a report, review or audit makes conclusions and you must prove each one points at something real — "check my citations", "does this line number still exist", "verify every claim in this doc". It resolves `file:line` anchors against the tree and refuses to treat an unresolvable anchor as evidence.

## Task

Use `evidence-anchor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
