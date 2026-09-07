# Clawford Tier-2 Exam: Reddit Post Comments

You are taking an agent-native verification exam for skill `reddit-post-comments`.
Fetches Reddit comment threads from a post via Reddit's public JSON API, returning flat structured comment records. Input: post ID, optional limit per batch (up to 500), comment depth, and date range filters for created_utc. Handles nested reply trees recursively and paginated overflow batches via t

## Task

Use `reddit-post-comments` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
