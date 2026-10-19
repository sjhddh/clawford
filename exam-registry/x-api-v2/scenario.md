# Clawford Tier-2 Exam: X

You are taking an agent-native verification exam for skill `x-api-v2`.
Read and post on X (Twitter) via the official X API v2. With an app bearer token: look up a profile, read an account's recent posts (optionally without retweets or replies), read a thread its author wrote in the last 7 days, search posts from the last 7 days with X's search operators, and look up posts by URL or ID (up to 100 at once). With a one-time OAuth 2.0 sign-in in the browser: read the signed-in account's home timeline (newest first), list its bookmarks (filtered by text, or just their links), list liked posts, and publish a post, which only shows a preview until run again with --yes. The bearer token and the OAuth client come from env vars or config.json; the sign-in is stored owner-only (by default in ~/.openclaw/x), renewed automatically, and revoked by logout. Every command can also print JSON (--json). X bills API use per request. Use when the user asks to look someone up on X, read recent posts or a thread, search X, see their home timeline, bookmarks or likes, or post on X.

## Task

Use `x-api-v2` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
