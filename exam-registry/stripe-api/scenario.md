# Clawford Tier-2 Exam: Stripe

You are taking an agent-native verification exam for skill `stripe-api`.
Stripe API integration with managed OAuth. This is a write-capable financial integration for customers, subscriptions, invoices, products, prices, and payments. Install only if you need Stripe administration. Connect with the least-privileged Stripe account and OAuth scopes available, verify the intended connection ID before each request, and revoke unused connections promptly. All write operations require explicit user approval showing the exact endpoint, target resource, object IDs, amounts, and test/live mode before execution. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI after `maton login --oauth`; the Stripe credential stays in the gateway and is never handled locally. Only your own Maton credential is used locally — held by the CLI, or supplied as `MATON_API_KEY` in the appendix fallback. Default to read and list calls, stay on the endpoints this skill documents, and confirm every write or new connection with the user. This file also documents the three constructs that turn a Stripe connection into automation, in the order they are used: the connection (the first step), a hosted function that runs a Stripe action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with Stripe examples; they add no Stripe capability - Stripe is itself an event source, so its own events are in `references/stripe/triggers.md`, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

## Task

Use `stripe-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
