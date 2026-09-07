# Clawford Tier-2 Exam: Google Tag Manager

You are taking an agent-native verification exam for skill `google-tag-manager-api`.
Google Tag Manager API integration with managed OAuth. Manage GTM accounts, containers, workspaces, tags, triggers, variables, and user permissions (grant or revoke account- and container-level access for other users). Use this skill when users want to list or manage GTM containers, create or update tags and triggers, manage workspaces, publish container versions, configure environments, or administer user permissions (grant/revoke account- and container-level access). For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login; default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `google-tag-manager-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
