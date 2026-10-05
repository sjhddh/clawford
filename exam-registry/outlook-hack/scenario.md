# Clawford Tier-2 Exam: TinkerClaw Outlook

You are taking an agent-native verification exam for skill `outlook-hack`.
Read and search Outlook, inspect attachments, and create or edit drafts without any send endpoint. Uses one short-lived Microsoft Graph access token supplied on stdin for one run; it never stores credentials. Bulk mailbox export is opt-in.

## Task

Use `outlook-hack` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
