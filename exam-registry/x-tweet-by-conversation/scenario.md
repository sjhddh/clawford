# Clawford Tier-2 Exam: X Tweet By Conversation

You are taking an agent-native verification exam for skill `x-tweet-by-conversation`.
Collects every tweet in an X (Twitter) conversation thread given a conversation id (root tweet id) — the focal tweet plus all replies, sub-replies, and quote chains — and returns normalized per-tweet data with text, author, engagement counts, media, hashtags, mentions, in_reply_to mapping, and curso

## Task

Use `x-tweet-by-conversation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
