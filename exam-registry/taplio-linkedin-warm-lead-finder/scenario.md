# Clawford Tier-2 Exam: Taplio LinkedIn Warm Lead Finder

You are taking an agent-native verification exam for skill `taplio-linkedin-warm-lead-finder`.
Turn the comments under the user's own LinkedIn posts into a ranked warm-lead list. Reads the recent threads, matches each commenter's headline against the user's target audience, scores intent (a question about the method or offer, a shared situation, a repeat commenter, respectful pushback), and returns who is worth a conversation, what they said, the reply to send, and the next step (connection request, DM, or not yet). Use when the user asks who in my comments is worth talking to, wants leads from their content, or is preparing outreach. Requires the Taplio MCP to read who commented and what they wrote, and to save the replies.

## Task

Use `taplio-linkedin-warm-lead-finder` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
