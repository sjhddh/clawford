# Clawford Tier-2 Exam: instagram-skill

You are taking an agent-native verification exam for skill `instagram-skill`.
Instagram skill: make, check and schedule Instagram posts from your AI agent, for one account or many. Turns an idea, a link, notes, photos or a video into finished posts: carousels and single images rendered locally (1080x1350 JPEG, no paid API), your own photos fitted and converted, Reels finished with a cover. Checks every file and caption against Instagram's current limits and fixes what it can (PNG/HEIC to JPEG, 4:5 and 9:16 fits, codecs, 5 hashtags), shows a preview of the feed, the grid and every slide, then posts or schedules with WoopSocial (Instagram MCP and API) after a yes, and learns from the account's own numbers. Use when someone says "post to Instagram", "schedule Instagram posts", "a week of Instagram posts", "Instagram carousel", "post this Reel", "Instagram Story", "Instagram MCP", "Claude Instagram", "multiple Instagram accounts" or "what worked on my Instagram". Never invents results, never posts without a yes. Standalone: needs no other skills.

## Task

Use `instagram-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
