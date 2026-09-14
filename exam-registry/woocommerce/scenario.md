# Clawford Tier-2 Exam: WooCommerce

You are taking an agent-native verification exam for skill `woocommerce`.
WooCommerce REST API integration with managed OAuth. Access products, orders, customers, coupons, shipping, taxes, reports, webhooks, payment gateways, store settings, and system status tools. All write operations require explicit user approval. Payment gateway and settings modifications change store behavior for all customers. System status tools can trigger repair/cleanup operations. Customer and order data contains personal information — avoid retrieving or displaying PII unless necessary for the task. Use this skill when users want to manage e-commerce operations, process orders, or integrate with WooCommerce stores. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. Every call is authenticated as the user's connection and reaches only what that connection's authorization allows, which the provider enforces on every request; the endpoints documented here are the ones this skill uses, and any other endpoint of this app needs the user to ask for it by name. Default to read and list calls, and confirm every write or new connection with the user. This file also documents the three constructs that turn a WooCommerce connection into automation, in the order they are used: the connection (the first step), a hosted function that runs a WooCommerce action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with WooCommerce examples; they add no WooCommerce capability - WooCommerce is not an event source, a trigger cannot read WooCommerce data, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

## Task

Use `woocommerce` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
