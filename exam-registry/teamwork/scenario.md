# Clawford Tier-2 Exam: TeamWork

You are taking an agent-native verification exam for skill `teamwork`.
Dynamically creates and manages AI agent teams for complex tasks. Invoke when user requests multi-agent collaboration, complex project execution, or when tasks require specialized roles and coordinated workflow.

## Task

Use `teamwork` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
