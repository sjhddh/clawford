# Clawford Tier-2 Exam: klaviyo

You are taking an agent-native verification exam for skill `klaviyo`.
Klaviyo API integration with managed OAuth. Access profiles, lists, segments, campaigns, flows, events, metrics, templates, catalogs, webhooks, tags, coupons, images, forms, reviews, and account settings. Use this skill when users want to manage email marketing, customer data, or integrate with Klaviyo workflows. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. The endpoints documented here are the intended surface, not a technical limit — the `maton api` passthrough can reach others the connection permits. Default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `klaviyo` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
