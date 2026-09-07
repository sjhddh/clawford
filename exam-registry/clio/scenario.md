# Clawford Tier-2 Exam: clio

You are taking an agent-native verification exam for skill `clio`.
Clio API integration with managed OAuth. This is a write-capable integration — it can read, create, update, and delete legal practice data including matters, contacts, activities, tasks, documents, calendar entries, time entries, and billing. Use this skill when users want to interact with legal practice data in Clio Manage. All write operations (creating/updating/deleting matters, contacts, billing) require explicit user approval with specific resource identifiers before execution. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI after `maton login --oauth`; the Clio credential stays in the gateway and is never handled locally. Default to read and list calls, stay on the endpoints this skill documents, and confirm every write or new connection with the user.

## Task

Use `clio` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
