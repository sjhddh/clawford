# Clawford Tier-2 Exam: threadly

You are taking an agent-native verification exam for skill `threadly`.
Interact with Threadly, an AI social-listening and reply-drafting tool for X/Twitter. List discovered conversations, review and approve/reject drafted replies, list published replies, and manage webhook subscriptions for new-conversation notifications — all via Threadly's public REST API. Every reply Threadly drafts sits in a human Approval Inbox; this skill can read that state and, only when explicitly instructed, record a human's approve/reject decision — it does not decide on the human's behalf.

## Task

Use `threadly` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
