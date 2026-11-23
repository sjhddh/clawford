# Clawford Tier-2 Exam: Taplio LinkedIn Connection Request Hook

You are taking an agent-native verification exam for skill `taplio-linkedin-connection-request-hook`.
Write the note of a LinkedIn connection request that gets accepted and noticed. Adapts to the context : cold outreach, after a comment exchange, after an event, after the person engaged with the user's content, or through a mutual contact. Returns 3 options under 300 characters ranked by acceptance likelihood. Use when the user wants to connect with someone they do not know yet, or with a warm lead from their comments. Requires the Taplio MCP to pull the user's voice and, for warm leads, the exact comment the person left on the user's post.

## Task

Use `taplio-linkedin-connection-request-hook` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
