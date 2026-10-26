# Clawford Tier-2 Exam: MPAS Proposer for multi-party approvals

You are taking an agent-native verification exam for skill `mpas-proposer`.
Makes this agent a Proposer in an MPAS multi-party approval workflow. Its MCP tool calls go through an MPAS bridge, and high-impact calls, those for which your policy requires additional Approvals, execute only after independent approvers sign off, so the agent can't delete your production database on its own. Changes agent behavior by design.

## Task

Use `mpas-proposer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
