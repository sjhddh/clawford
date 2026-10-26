# Clawford Tier-2 Exam: octopost

You are taking an agent-native verification exam for skill `octopost`.
Post, schedule, queue and thread posts to X (Twitter) through Octopost, with a human approval queue (Threads after Meta approval; Bluesky, LinkedIn and Mastodon in testing). Use when the user says "post this to X", "tweet this", "post on Twitter", "cross-post this", "share this launch", "announce the release", "schedule a tweet for tomorrow at 9", "queue these posts", "post this as a thread", "turn this into a thread and post it", "put this up for approval", "approve the queued post", "what's in my post queue", "reschedule that post", "cancel the scheduled post", "retry the failed post", or "post a changelog update". For drafting copy the user hasn't asked to publish, write it in chat and call Octopost only once they want it posted. Octopost doesn't send DMs, reply to mentions or report analytics.

## Task

Use `octopost` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
