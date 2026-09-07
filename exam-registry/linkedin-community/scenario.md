# Clawford Tier-2 Exam: LinkedIn Community

You are taking an agent-native verification exam for skill `linkedin-community`.
LinkedIn Community Management API integration with managed OAuth. Manage organization pages, posts, comments, reactions, and analytics. Use this skill when users want to create or manage LinkedIn posts, comment on posts, react to content, look up organizations, or retrieve follower/page/share statistics. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login; default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `linkedin-community` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
