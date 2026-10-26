# Clawford Tier-2 Exam: SecureMyAgent

You are taking an agent-native verification exam for skill `securemyagent`.
Security checkup for this agent. Scores the machine 0-100 (exposed gateway, plaintext secrets, risky skills and MCP servers, broad tool scopes) and gives exact fixes. Use when asked to check, harden or score the agent's security, before installing a skill or MCP server, or on a weekly heartbeat.

## Task

Use `securemyagent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
