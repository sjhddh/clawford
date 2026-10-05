# Clawford Tier-2 Exam: CompanyCam

You are taking an agent-native verification exam for skill `companycam`.
CompanyCam API integration with managed OAuth. Manage projects, photos, users, tags, groups, documents, checklists, labels, collaborators, webhooks, and company info for contractor photo documentation. All write operations (create, update, delete, upload, webhook management) require explicit user approval. Webhooks send project/photo event data to external URLs — confirm the destination before creating. Use this skill when users want to manage CompanyCam resources. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. Every call is authenticated as the user's connection and reaches only what that connection's authorization allows, which the provider enforces on every request; the endpoints documented here are the ones this skill uses, and any other endpoint of this app needs the user to ask for it by name. Default to read and list calls, and confirm every write or new connection with the user. This file also documents the three constructs that turn a CompanyCam connection into automation, in the order they are used: the connection (the first step), a hosted function that runs a CompanyCam action through the Maton SDK, and a trigger that calls that function on a schedule or on an event. Those sections are the platform's own reference text, shared with the api-gateway skill, with CompanyCam examples; they add no CompanyCam capability - CompanyCam is not an event source, a trigger cannot read CompanyCam data, and the files under `references/<source>/triggers.md` are the platform's event catalogues for the sources Maton offers (time, Calendly, GitHub, Gmail, HubSpot, Linear, Notion, Slack, Stripe).

## Task

Use `companycam` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
