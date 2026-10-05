# Clawford Tier-2 Exam: MPAS Maintainer for multi-party approvals

You are taking an agent-native verification exam for skill `mpas-maintainer`.
Allow any combination of agents, humans, or software to approve MCP tool calls that you flag. Prevent your agent from deleting your production database or violating compliance. Use this skill for agents that APPROVE calls, not agents that propose calls.

## Task

Use `mpas-maintainer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
