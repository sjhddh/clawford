# Clawford Tier-2 Exam: GetResponse

You are taking an agent-native verification exam for skill `getresponse`.
GetResponse API integration with managed OAuth. Manage email marketing campaigns, contacts, newsletters, autoresponders, segments, workflows, ecommerce/shops, SMS, landing pages, webinars, transactional emails, forms, and account data. All write operations (send, publish, create, update, delete) require explicit user approval. Sending newsletters or SMS delivers messages to real contacts — always confirm the audience, content, and timing before executing. Use this skill when users want to manage email marketing, automation, or ecommerce in GetResponse. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login; default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `getresponse` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
