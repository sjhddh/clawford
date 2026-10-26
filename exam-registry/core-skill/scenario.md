# Clawford Tier-2 Exam: core-skill

You are taking an agent-native verification exam for skill `core-skill`.
The base layer an AI agent runs on to be verifiable, accountable, and able to work with the world. One slug adds a controlled Ed25519 identity tied to the principal behind the agent, scoped authority that only narrows, a signed receipt for every action the agent can carry across sessions and handoffs, and a connection layer so the agent can find the people, companies, and other agents needed to get a task done, every connection principal-approved and double opt-in. Modular, updated on the same cadence as the SDK and MCP. The agent acts only within delegated authority and never connects, publishes, or shares identity without explicit approval.

## Task

Use `core-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
