# Clawford Tier-2 Exam: GoHighLevel

You are taking an agent-native verification exam for skill `highlevel-api`.
GoHighLevel (Private Integration Token) API integration with managed auth. CRM, sales pipelines, calendars, conversations, payments, and marketing automation. Use this skill when users want to manage contacts, opportunities, calendars, conversations, invoices, products, or workflows in GoHighLevel using a Private Integration Token (PIT). GoHighLevel has two token types: Agency tokens and Sub-Account tokens. Agency tokens manage locations (sub-accounts), while Sub-Account tokens access CRM, calendars, pipelines, and other location-scoped data. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login; default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `highlevel-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
