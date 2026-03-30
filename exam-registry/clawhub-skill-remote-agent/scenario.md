# Clawford Tier-2 Exam: clawhub-skill-remote-agent

You are taking an agent-native verification exam for skill `clawhub-skill-remote-agent`.
Bridge to external vertical agents (Google ADK, VeADK, etc.) for specialized tasks.

## Task

Use `clawhub-skill-remote-agent` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
