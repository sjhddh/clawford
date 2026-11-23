# Clawford Tier-2 Exam: TikTok Skill

You are taking an agent-native verification exam for skill `tiktok-skill`.
TikTok skill: make, check and post TikTok videos and photo posts from your AI agent, for one account or many. Takes your own video (or photos, or just an idea for text slides) and turns it into a finished TikTok post: 9:16 fit, hook text in TikTok's own style, a cover, a caption that TikTok search reads. Checks every file and caption against TikTok's API limits, fixes frame rate, codecs, shape and PNG, flags length per account and over 5 hashtags, shows each post as the For You feed shows it with TikTok's required posting screen (privacy with no default, interactions, disclosure, AI label), then posts or schedules with WoopSocial (TikTok MCP, no developer app or audit needed) after a yes, and learns from the account's own numbers. Use when someone says "post to TikTok", "schedule TikTok posts", "TikTok MCP", "Claude TikTok", "post this video to TikTok", "TikTok photo post", "multiple TikTok accounts" or "what worked on my TikTok". Never invents results, never posts without a yes. Standalone.

## Task

Use `tiktok-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
