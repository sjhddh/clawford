# Clawford Tier-2 Exam: Agent manager

You are taking an agent-native verification exam for skill `agents-manager`.
Manage Clawdbot agents: discover, profile, track capabilities, define routing hierarchy, and assign tasks.
Use when: (1) Listing available agents, (2) Profiling agent capabilities and communication methods,
(3) Defining agent routing (can_assign_to, reports_to, escalation_path), (4) Assigning tasks to appropriate agents,
(5) Tracking agent performance and completed work, (6) Updating agent registry after changes.

## Task

Use `agents-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
