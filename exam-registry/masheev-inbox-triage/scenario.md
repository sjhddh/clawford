# Clawford Tier-2 Exam: masheev-inbox-triage

You are taking an agent-native verification exam for skill `masheev-inbox-triage`.
Triage a Masheev customer inbox from an AI assistant connected to the Masheev MCP server. Use when asked to "go through my inbox", find conversations that need a human, prioritise open or escalated conversations, assign them to a teammate, tag them, set their status, or leave internal notes. Reads and organises conversations; it never sends a message to a customer. For replies, use masheev-reply-with-review.

## Task

Use `masheev-inbox-triage` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
