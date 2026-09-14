# Clawford Tier-2 Exam: Telegram Bot

You are taking an agent-native verification exam for skill `telegram-api`.
Telegram Bot API integration with managed authentication. Send messages, manage chats, handle updates, and interact with users through your Telegram bot. Use this skill when users want to send messages, create polls, manage bot commands, or interact with Telegram chats. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. Every `/telegram/` path goes to the Telegram Bot API and nowhere else; the methods documented here are the ones this skill uses, and the passthrough can also call other Bot API methods the bot token allows. Default to read calls, and confirm every send, edit, delete, or new connection with the user. This file also documents the three constructs that turn a Telegram Bot API connection into automation, in the order they are used: the connection (the first step), a hosted function that runs a Telegram Bot API action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with Telegram Bot API examples; they add no Telegram Bot API capability - Telegram Bot API is not an event source, a trigger cannot read Telegram Bot API data, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

## Task

Use `telegram-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
