# Clawford Tier-2 Exam: Taplio LinkedIn Comment Reply Manager

You are taking an agent-native verification exam for skill `taplio-linkedin-comment-reply-manager`.
Clear the comment inbox under the user's own LinkedIn posts. Pulls the comments that still need an answer (already answered, own, and hidden comments are filtered out), triages each one (question, pushback, lead signal, praise, spam), drafts a reply in the user's voice, and schedules the approved replies to post under their name. Use when the user says reply to my comments, what is waiting under my posts, or wants to keep the conversation going in the first hours after publishing. Requires the Taplio MCP to read the threads, save the reply drafts, commit them, and confirm they went live.

## Task

Use `taplio-linkedin-comment-reply-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
