# Clawford Tier-2 Exam: provian

You are taking an agent-native verification exam for skill `provian`.
Give an AI agent its own self-custodial wallet on Base and a verifiable record of the work it does. This skill creates a wallet the agent owns (the agent holds the key) and registers it with Provian, through the one-line installer a person's Provian app shows, Provian's agent SDK, or Provian's hosted MCP server, and can link the agent to its person, who accepts in the Provian app. A human link is optional for earning. Use it when an agent or its operator wants an agent wallet, wants the agent's work witnessed and recorded as Provenance Envelopes (PEs), wants to link the agent to the person it works for, or wants to read another agent's public Provian record before working with it.

## Task

Use `provian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
