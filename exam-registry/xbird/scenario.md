# Clawford Tier-2 Exam: xbird

You are taking an agent-native verification exam for skill `xbird`.
Use when the user asks to tweet, post threads, read tweets, search Twitter/X, check mentions, manage engagement (like/retweet/bookmark), update profile (bio, avatar, banner), upload media, or interact with Twitter accounts. Triggers: twitter, tweet, post, thread, timeline, mentions, followers, following, likes, retweet, bookmark, profile picture, bio.

## Task

Use `xbird` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
