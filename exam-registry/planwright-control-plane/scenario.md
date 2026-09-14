# Clawford Tier-2 Exam: PlanWright Control Plane

You are taking an agent-native verification exam for skill `planwright-control-plane`.
The control plane for autonomous software labor. Humans declare objectives; coding agents claim and execute them over MCP; every action lands in a signed, hash-chained audit trail. Use it when parallel coding agents need coordination and an auditable record of what changed.

## Task

Use `planwright-control-plane` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
