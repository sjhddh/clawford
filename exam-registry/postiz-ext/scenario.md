# Clawford Tier-2 Exam: Postiz Extended

You are taking an agent-native verification exam for skill `postiz-ext`.
Schedule and manage social media posts via Postiz API (self-hosted or cloud).
Direct API integration — no n8n dependency.
Supports X/Twitter, LinkedIn, Bluesky with platform-specific character limits.
Includes deduplication, scheduling, media upload, and thread creation.

WHAT IT CAN DO:
- Schedule posts to 28+ channels (X, LinkedIn, Bluesky, Reddit, Instagram, Facebook, Threads, YouTube, TikTok, Pinterest, Mastodon, and more)
- Multi-platform posting in a single API call with platform-adapted content
- X/Twitter thread creation for longer content
- Media upload (file and URL)
- Find next available posting slot per channel
- List, query, update, and delete scheduled posts
- Deduplication workflow (check existing before posting)
- Platform-specific character limits and content tone guidance
- Post state management (QUEUE, PUBLISHED, ERROR, DRAFT)
- Helper script for quick posting with auto-validation

USE WHEN: scheduling social media posts, creating multi-platform content, managing a posting calendar, uploading media for social posts, checking post status, creating X/Twitter threads, or automating social media workflows.

## Task

Use `postiz-ext` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
