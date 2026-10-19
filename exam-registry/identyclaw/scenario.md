# Clawford Tier-2 Exam: IdentyClaw

You are taking an agent-native verification exam for skill `identyclaw`.
IdentyClaw API workflows — multi-API JWT sessions (auto-login), HOLA peer handshake lines, DID resolution, and Passport lookup. Requires an IdentyClaw Passport on the Gateway. Use when calling home or federated APIs, creating or verifying HOLA lines, resolving Passport IDs, or reading agent discovery metadata. For agent-to-agent A2A messaging use the separate identyclaw-a2a plugin.

## Task

Use `identyclaw` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
