# Clawford Tier-2 Exam: gumroad

You are taking an agent-native verification exam for skill `gumroad`.
Gumroad API integration with managed OAuth. Access products, sales, subscribers, licenses, and webhooks for your digital storefront. Use this skill when users want to manage their Gumroad products, verify licenses, view sales data, or set up webhook notifications. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login; default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `gumroad` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
