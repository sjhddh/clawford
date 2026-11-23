# Clawford Tier-2 Exam: Taplio LinkedIn DM Opener

You are taking an agent-native verification exam for skill `taplio-linkedin-dm-opener`.
Write the first DM after a LinkedIn connection request is accepted, or after a comment exchange turns into a connection. The goal is to open a real conversation, not pitch. Returns 3 short, warm, specific options that earn a reply, referencing the real exchange when the person came from the user's comments. Use when the user just got a new connection and does not know what to say, or always falls into the auto-pitch trap. Requires the Taplio MCP to pull the user's voice and the comment thread the connection started from.

## Task

Use `taplio-linkedin-dm-opener` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
