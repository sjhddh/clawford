# Clawford Tier-2 Exam: postflight

You are taking an agent-native verification exam for skill `postflight`.
Drafts X (Twitter) posts on a weighted pillar schedule, sends each draft to the authorized user for approval, and publishes only the ones they ship. Invoke on cron messages that mention postflight (drafting, or backlog/style/metrics maintenance), a request for a tweet draft, a ship/skip/edit reply to a pending draft, a forwarded x.com post link to get reply options drafted, or a photo sent to file into a photo library.

## Task

Use `postflight` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
