# Clawford Tier-2 Exam: schedulala

You are taking an agent-native verification exam for skill `schedulala`.
Install, connect, and use Schedulala to schedule and publish social media posts to 12 platforms (Twitter/X, Instagram, TikTok, LinkedIn, YouTube, Facebook, Threads, Bluesky, Pinterest, Mastodon, Telegram, Google Business Profile). Use when the user asks to install or set up Schedulala, or wants to create, schedule, preview, or bulk-plan social posts, post photos/videos/PDFs, auto-post a first comment (link-in-first-comment), check post status or analytics, reply to or moderate comments, monitor keywords, or repurpose YouTube videos. Works through the schedulala CLI (any agent with a shell), the hosted MCP connector (claude.ai / ChatGPT, with interactive widgets), or the local @schedulala/mcp-server (Claude Desktop, Claude Code, Cursor, OpenClaw). Encodes key setup, the per-platform rules (TikTok privacy + postMode, Instagram media, YouTube titles, Pinterest boards, character limits), and the safe workflow draft → validate/preview → confirm → publish → verify.

## Task

Use `schedulala` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
